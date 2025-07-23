import requests

def get_url(url: str):
    """A wrapper for getting urls."""
    payload = requests.get(url)
    return payload.json()

