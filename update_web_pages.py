import pandas as pd


def update_main_page(games_df):
    # we don't want to show the paper IDs on our table
    games_main_df = games_df.drop("Paper IDs", axis=1)

    with open("src/index.html", "r") as filein:
        html = filein.read()

    with open("static/index.html", "w") as fileout:
        fileout.write(html)

    with open("src/script_engines.js", "r") as filein:
        script = filein.read()

    engines = games_main_df.to_json(None, indent=2, orient="records")
    with open("static/game_engine_table.js", "w") as fileout:
        fileout.write('const game_engines = { \n "data": ' + engines)
        fileout.write("}\n")
        fileout.write(script)


def update_game_engine_page(engine: pd.Series, publications: pd.DataFrame) -> int:
    if engine["PubMed game citations"] == "-":
        return 0

    if int(engine["PubMed game citations"]) > 0:
        link_name = engine["Name"].replace(" ", "_")
        this_paper = set([engine["Name"]])
        contains_this_paper = this_paper.issubset
        papers_df = publications[
            publications["Game Engines - Search"].map(contains_this_paper)
        ]

        with open("src/index.html", "r") as filein:
            html = filein.read()
            html = html.replace("game_engine_table.js", link_name + ".js")
            html = html.replace(
                "A list of game engines (from wikipedia) and PubMed citation counts",
                "A list of papers indexed on PubMed mentioning "
                + engine["Name"]
                + " and game.",
            )
        with open("static/" + link_name + ".html", "w") as fileout:
            fileout.write(html)

        # prepare data for writing out
        papers_df = papers_df[papers_df["Relevant"]]
        papers_df = papers_df.drop(
            ["PMID", "Relevant", "Comment", "Game Engines - Search"], axis=1
        )
        papers = papers_df.to_json(None, indent=2, orient="records")
        with open("src/script_papers.js", "r") as filein:
            script = filein.read()

        with open("static/" + link_name + ".js", "w") as fileout:
            fileout.write('const papers = { \n "data": ' + papers)
            fileout.write("}\n")
            fileout.write(script)

        return len(papers_df)

    return 0


if __name__ == "__main__":
    games_df = pd.read_json("data/game_engine.db")
    update_main_page(games_df)

    publications_df = pd.read_json("data/game_engine_papers.db")

    count = 0
    for index, engine in games_df.iterrows():
        count += update_game_engine_page(engine, publications_df)

    print("Got ", count, " matches for ", len(publications_df), " publications.")
