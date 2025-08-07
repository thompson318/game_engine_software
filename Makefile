static/*.html: src/index.html update_web_pages.py data/game_engine.db data/game_engine_papers.db
	python update_web_pages.py

data/game_engine.db:
	python update_game_engine_list.py

data/game_engine_papers.db:
	python update_publication_lists.py
