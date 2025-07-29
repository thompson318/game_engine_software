import pandas as pd


if __name__ == "__main__":
    games_df = pd.read_json("data/game_engine.db")

    # we don't want to show the paper IDs on our table
    games_df = games_df.drop("Paper IDs", axis=1)

    with open("script.js", "r") as filein:
        script = filein.read()

    engines = games_df.to_json(None, indent=2, orient="records")
    with open("game_engine_table.js", "w") as fileout:
        fileout.write('const game_engines = { \n "data": ' + engines)
        fileout.write("}\n")
        fileout.write(script)
