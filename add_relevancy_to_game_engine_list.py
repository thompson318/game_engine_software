import pandas as pd


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
    # relevant_papers = papers[papers["Relevant"]]
    read_papers = len(papers) - len(unread_papers)

    return read_papers, 0.0


if __name__ == "__main__":
    game_engines_df = pd.read_json("data/game_engine.db")
    publications_df = pd.read_json("data/game_engine_papers.db")

    for index, game_engine in game_engines_df.iterrows():
        read_papers, relevancy = get_relevancy_statistics(
            game_engine["Name"], publications_df
        )
        print(
            "processing "
            + game_engine["Name"]
            + " got "
            + str(read_papers)
            + " read papers."
        )
