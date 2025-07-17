import pycurl
import json
from io import BytesIO

buffer = BytesIO()
c=pycurl.Curl()

c.setopt(c.URL, 'https://www.wikitable2json.com/api/List_of_game_engines?table=0&keyRows=1')
c.setopt(c.WRITEDATA, buffer)
c.perform()

body=buffer.getvalue()
json_obj = json.loads(body.decode())

for item in json_obj[0]:
    # we need to clear the buffer here then better prepare our search 
    # terms
    print(item.get('Name'))
    c.setopt(c.URL, 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&retmode=json&term=unreal+engine')
