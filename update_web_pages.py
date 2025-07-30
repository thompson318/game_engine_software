import pandas as pd


def update_main_page(games_df):
    # we don't want to show the paper IDs on our table
    games_main_df = games_df.drop("Paper IDs", axis=1)

    with open("script.js", "r") as filein:
        script = filein.read()

    engines = games_main_df.to_json(None, indent=2, orient="records")
    with open("game_engine_table.js", "w") as fileout:
        fileout.write('const game_engines = { \n "data": ' + engines)
        fileout.write("}\n")
        fileout.write(script)


def update_game_engine_page(engine):
    if engine["PubMed game citations"] == "-":
        return

    if int(engine["PubMed game citations"]) > 0:
        link_name = engine["Name"].replace(" ", "_")
        with open("index.html", "r") as filein:
            html = filein.read()
        with open("engines/" + link_name + ".html", "w") as fileout:
            fileout.write(html)


if __name__ == "__main__":
    games_df = pd.read_json("data/game_engine.db")
    update_main_page(games_df)
    for index, engine in games_df.iterrows():
        update_game_engine_page(engine)
