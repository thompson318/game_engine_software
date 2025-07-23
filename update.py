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


def get_citations(engine_name: str):
    """Searches database (pubmed) to get citations that may reference the
    engine_name."""
    search_term = engine_name.replace(" ", "+")
    url = (
        'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&retmode=json&term="'
        + search_term
        + '"'
    )
    body = get_url(url)
    count = body.get("esearchresult").get("count")
    human_url = 'https://pubmed.ncbi.nlm.nih.gov/?term="' + search_term + '"'
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
        url, count = get_citations(engine.get("Name"))
        game_url, game_count = get_citations(engine.get("Name") + "+game")

        if int(count) == 0:
            game_count = "-"

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
