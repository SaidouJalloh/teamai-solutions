from fastapi import APIRouter
from pydantic import BaseModel
from typing import List

router = APIRouter()

# Exemple de modèle Pydantic pour une formation
class Formation(BaseModel):
    id: int
    titre: str
    description: str
    date: str
    niveau: str
    image_url: str = None

# Mock data pour tester rapidement
formations_db = [
    {
        "id": 1,
        "titre": "Introduction à l'IA",
        "description": "Apprenez les bases de l'intelligence artificielle.",
        "date": "2024-07-20",
        "niveau": "Débutant",
        "image_url": "https://placehold.co/600x400"
    },
    {
        "id": 2,
        "titre": "IA avancée pour la santé",
        "description": "Formation IA appliquée à la santé.",
        "date": "2024-09-15",
        "niveau": "Avancé",
        "image_url": "https://placehold.co/600x400"
    }
]

@router.get("/formations", response_model=List[Formation])
def list_formations():
    return formations_db
