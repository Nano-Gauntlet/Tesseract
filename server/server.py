from pydoc import describe
from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello():
    return 'Hello, World!'

@app.route("/query/<path:subpath>")
def query(subpath):
    from db import readMetadata
    import re

    pattern = {"$regex":f".*{subpath}.*", "$options": 'i'}
    docs = readMetadata({"title": pattern, "description": pattern })
    docs.extend(readMetadata({ "description": pattern }))
    if(subpath=="error"):
        return {
            "query": subpath,
            "res": None,
            "error": "this is the error msg"
        }
    
    return {
        "query": subpath,
        "res": docs,
        "error": None
    }

@app.route("/updateMetadataDb")
def updateMetadataDb():
    from db import insertMetadata
    from scrapper import queryArticleMetadata
    
    return "ye mat karo aabhi"  

@app.route("/updateMetadataRange/<path:span>")
def updateMetadataRange(span):
    from db import insertMetadata
    from scrapper import queryArticleMetadata
    
    start, end = list(map(int, span.split("/") ))

    results = queryArticleMetadata(start-1, end)
    _, ids = insertMetadata(results)
    if _:
        return {"error":None, "result": {"ids": [str(i) for i in ids]}, "msg": "successfully inserted"}
    return {"error" : "error", "result":None, "msg": "some error occured" }






