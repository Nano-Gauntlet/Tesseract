
import pymongo

myclient = pymongo.MongoClient("mongodb://localhost:27017/Tesseract")
database = myclient["Tesseract"]
collection = database["metadata"]

def insertMetadata(metadata: list):
    ids = collection.insert_many(metadata)
    if ids:
        return True, ids.inserted_ids
    return False, ids 

def readMetadata(conditions: dict):
    docs = []
    for doc in collection.find(conditions):
        doc["_id"] = str(doc["_id"])
        docs.append(doc)
    return docs
