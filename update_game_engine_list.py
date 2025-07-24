import json
import pandas as pd

from game_engine_software.common import get_url


def get_game_engines():
    """Returns a list of game_engine dictionaries (currently derived from
    wikipedia)"""
    # TODO we should read in the existing data base /data/game_engine.db
    # to allow us to include engines not listed on wikipedia and also to
    # alert us when a new engine is found
    body = get_url(
        "https://www.wikitable2json.com/api/List_of_game_engines?table=0&keyRows=1"
    )
    return body[0]


def get_citations_and_url(
    engine_name: str, skip_search: bool, max_citations: int, second_term: str = ""
):
    """Searches database (pubmed) to get citations that may reference the
    engine_name.

    :param engine_name: the search term to use
    :param skip_search: we can skip the search and just return the url
    """
    search_term = engine_name.replace(" ", "-")
    url = (
        'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&retmode=json&term="'
        + search_term
        + '"'
    )
    human_url = 'https://pubmed.ncbi.nlm.nih.gov/?term="' + search_term + '"'

    if len(second_term) > 0:
        url = url + '+and+"' + second_term + '"'
        human_url = human_url + '+and+"' + second_term + '"'

    url = url + "&retmax = " + str(max_citations)

    count = "-"
    paperIDs = []
    if not skip_search:
        body = get_url(url)
        count = body.get("esearchresult").get("count")
        paperIDs = body.get("esearchresult").get("idlist")

    return human_url, count, paperIDs


if __name__ == "__main__":
    game_engines = get_game_engines()

    games: dict = {"data": []}

    games_df = pd.DataFrame()

    max_citations = 100
    for i, engine in enumerate(game_engines):
        print(
            "processing "
            + engine.get("Name")
            + " : "
            + str(i)
            + "/"
            + str(len(game_engines))
        )
        url, count, paperIDs = get_citations_and_url(
            engine.get("Name"), False, max_citations
        )

        if int(count) > max_citations:
            print(
                "Found more than "
                + str(max_citations)
                + " for "
                + engine.get("Name")
                + "Only collecting first "
                + str(max_citations)
            )
        if int(count) == 0:
            game_url, game_count, paperIDs = get_citations_and_url(
                engine.get("Name"), True, max_citations, "game"
            )
        else:
            game_url, game_count, paperIDs = get_citations_and_url(
                engine.get("Name"), False, max_citations, "game"
            )

        games.get("data", []).append(
            {
                "Name": engine.get("Name"),
                "PubMed citations": count,
                "PubMed game citations": game_count,
                "PubMed Link": url,
                "PubMed Game Link": game_url,
                "Paper IDs": paperIDs,
            }
        )

    # create a pandas data frame and save it as json to make human readable and editable
    # TO DO - this script could just up date the database, then the creation of js could be done
    # elsewhere
    games_df = pd.DataFrame(games)
    games_df.to_json("data/game_engine.db", indent=2)

    # we don't want to show the paper IDs on our table
    for game in games.get("data", []):
        del game["Paper IDs"]

    with open("script.js", "r") as filein:
        script = filein.read()

    with open("game_engine_table.js", "w") as fileout:
        fileout.write(
            "const game_engines = " + json.dumps(games, indent=2, sort_keys=False)
        )
        fileout.write(script)
