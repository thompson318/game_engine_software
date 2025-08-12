import pandas as pd
import math


def get_relevancy_statistics(engine_name: str, publications_df: pd.DataFrame):
    """Searches the publications data frame to determine how many papers have
    been read and what proportion of them are relevant.

    :param engine_name: the engine name
    :param publications_df: a dataframe of publications
    :returns: a tuple of the number of read publications and the percent
        relevant
    """

    papers = publications_df[
        publications_df["Game Engines - Search"].apply(lambda x: engine_name in x)
    ]
    unread_papers = papers[papers["Comment"] == "Not reviewed yet"]
    read_papers = len(papers) - len(unread_papers)

    relevant_papers = papers[
        papers["Relevant"] & papers["Comment"] == "Not reviewed yet"
    ]

    try:
        percent_relevant = len(relevant_papers) / read_papers * 100.0
    except ZeroDivisionError:
        percent_relevant = math.nan

    return read_papers, percent_relevant


if __name__ == "__main__":
    game_engines_df = pd.read_json("data/game_engine.db")
    publications_df = pd.read_json("data/game_engine_papers.db")

    relevancy_string = []
    for index, game_engine in game_engines_df.iterrows():
        if (
            game_engine["PubMed game citations"] != "-"
            and int(game_engine["PubMed game citations"]) > 0
        ):
            read_papers, relevancy = get_relevancy_statistics(
                game_engine["Name"], publications_df
            )
            relevancy_string.append(str(relevancy) + "% of " + str(read_papers))
        else:
            relevancy_string.append("-")

    game_engines_df.insert(3, "Relevancy and read papers.", relevancy_string)
    game_engines_df.to_json("data/game_engine.db", indent=2, orient="records")
