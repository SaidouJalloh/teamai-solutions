from fastapi import APIRouter
from pydantic import BaseModel
from typing import List

router = APIRouter()

class News(BaseModel):
    id: int
    titre: str
    contenu: str
    date: str
    image_url: str = None

news_db = [
    {
        "id": 1,
        "titre": "Lancement TeamAI Solutions",
        "contenu": "Notre plateforme IA est enfin en ligne !",
        "date": "2024-06-10",
        "image_url": "https://placehold.co/600x400"
    },
    {
        "id": 2,
        "titre": "Nouvelle formation IA Santé",
        "contenu": "Inscrivez-vous dès maintenant à notre module spécialisé.",
        "date": "2024-07-05",
        "image_url": "https://placehold.co/600x400"
    }
]

@router.get("/news", response_model=List[News])
def list_news():
    return news_db
