from typing import List, Tuple, Union
from fastapi import FastAPI
from pydantic import BaseModel

from fugashi import Tagger
import cutlet

app = FastAPI()

katsu = cutlet.Cutlet()
tagger = Tagger('-Owakati')

class TextRequest(BaseModel):
    text: str

@app.post("/analyze_text/")
async def analyze_text(request_data: TextRequest):
    analyzed_words = []
    for word in tagger(request_data.text):
        analyzed_words.append({
            "surface": word.surface,
            "lemma": word.feature.lemma,
            "pos": word.pos
        })
    return analyzed_words

@app.post("/convert_to_romaji/")
async def convert_to_romaji(request_data: TextRequest):
    romaji_text = katsu.romaji(request_data.text)
    return {"romaji": romaji_text}

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}