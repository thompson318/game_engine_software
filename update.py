import json
import requests


def get_url(url: str):
    """A wrapper for getting urls."""
    payload = requests.get(url)
    return payload.json()


def get_game_engines():
    """Returns a list of game_engine dictionaries (currently derived from
    wikipedia)"""
    body = get_url(
        "https://www.wikitable2json.com/api/List_of_game_engines?table=0&keyRows=1"
    )
    return body[0]


def get_citations_and_url(engine_name: str, skip_search: bool, second_term=""):
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

    count = "-"

    if not skip_search:
        body = get_url(url)
        count = body.get("esearchresult").get("count")

    return human_url, count


if __name__ == "__main__":
    game_engines = get_game_engines()

    games: dict = {"data": []}
    for i, engine in enumerate(game_engines):
        print(
            "processing "
            + engine.get("Name")
            + " : "
            + str(i)
            + "/"
            + str(len(game_engines))
        )
        url, count = get_citations_and_url(engine.get("Name"), False)

        if int(count) == 0:
            game_url, game_count = get_citations_and_url(
                engine.get("Name"), True, "game"
            )
        else:
            game_url, game_count = get_citations_and_url(
                engine.get("Name"), False, "game"
            )

        games.get("data", []).append(
            {
                "Name": engine.get("Name"),
                "PubMed citations": count,
                "PubMed game citations": game_count,
                "PubMed Link": url,
                "PubMed Game Link": game_url,
            }
        )

    with open("script.js", "r") as filein:
        script = filein.read()

    with open("game_engine_table.js", "w") as fileout:
        fileout.write(
            "const game_engines = " + json.dumps(games, indent=2, sort_keys=False)
        )
        fileout.write(script)
