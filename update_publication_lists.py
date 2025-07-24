import pandas as pd
import os
import time

from game_engine_software.common import get_url


def get_publication_summary(pmid: str, pm_key: str | None):
    """Returns summary paper data and url from pubmed.

    :param pmid: the pubmed id
    """
    # without API key we can do 3 queries a second. With we can do 10.
    url = (
        "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id="
        + pmid
        + "&retmode=json"
    )

    if pm_key is not None:
        url = url + "&api_key" + pm_key

    human_url = "https://pubmed.ncbi.nlm.nih.gov/" + pmid

    body = get_url(url)

    result = body.get("result", None)
    if result is None:
        if body.get("error", "") == "API rate limit exceeded":
            raise IOError
        raise ValueError("Result not found" + body)

    if len(result.get("uids", [])) != 1:
        raise ValueError("Unexpected number of query results:" + body)
    return human_url, result.get(pmid)


if __name__ == "__main__":
    pubmed_key = os.environ.get("PUBMED_API_KEY", None)
    if pubmed_key is None:
        print("PUBMED_API_KEY not found, performance will be reduced.")
    game_engines_df = pd.read_json("data/game_engine.db")
    try:
        papers_df = pd.read_json("data/game_engine_papers.db")
    except ValueError:
        papers_df = pd.DataFrame()

    print(papers_df["DOI"])
    papers_dict = []

    # TODO should we use apply instead of iterating?
    # https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.apply.html
    for index, game_engine in game_engines_df.iterrows():
        api_throttle = 0.0
        for pmid in game_engine.loc["Paper IDs"]:
            try:
                url, summary = get_publication_summary(pmid, pubmed_key)
            except IOError:
                print("Hit api limit, pause and try again")
                time.sleep(1)
                url, summary = get_publication_summary(pmid, pubmed_key)
                api_throttle += 0.020
            time.sleep(api_throttle)

            title = summary.get("title", "Title not found")
            citations = summary.get("pmcrefcount", -1)

            article_ids = summary.get("articleids", [])
            doi = "doi not found"
            for art_id in article_ids:
                if art_id.get("idtype", "") == "doi":
                    doi = art_id.get("value")

            if doi in papers_df["DOI"].values:
                print(doi + " already present ")
                # print (papers_df.loc[papers_df['DOI'] == doi])
                # here we're trying to see if we've already added it for this engine. FIXME
                if (
                    game_engine.loc["Name"]
                    not in papers_df.loc[papers_df["DOI"]].loc["Game Engines - Search"]
                ):
                    print("but not for this game engine")
                    papers_df.loc[papers_df["DOI"]].loc["Game Engines - Search"].append(
                        game_engine.loc["Name"]
                    )
                else:
                    print("For this game engine")

            papers_dict.append(
                {
                    "PMID": pmid,
                    "DOI": doi,
                    "Title": title,
                    "Citations": citations,
                    "Relevant": True,  # all relevant until checked otherwise
                    "Comment": "Not reviewed yet",  # Free text comment
                    "Game Engines - Search": [game_engine.loc["Name"]],
                    "Game Engine - Actual": "Unknown",  # Update this after review
                }
            )
            print("Found " + title)
            print("https://doi.org/" + doi)

    papers_df = pd.DataFrame(papers_dict)
    papers_df.to_json("data/game_engine_papers.db", indent=2)
