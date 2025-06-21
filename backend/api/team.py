# api/team.py

from fastapi import APIRouter

router = APIRouter()

team_members = [
    {"name": "Yacin Mouhoumed Elmi", "role": "Doctorant en Économétrie-statistique et Data Scientist", "image": "yacin.jpg"},
    {"name": "Abdoul Wahab Diallo", "role": "Professeur Permanent à DIT | Chercheur en IA", "image": "awd.jpg"},
    {"name": "Lauriane MBAGDJE DORENAN", "role": "AWS AI & ML Scholar'24 | Junior Data Scientist", "image": "laurian.jpg"},
    {"name": "Oumar KRA", "role": "Ingénieur en Intelligence Artificielle", "image": "oumar.jpg"},
    {"name": "Mamadou Saidou Diallo", "role": "Software Engineer | IA Engineer", "image": "Imamsaid.jpg"},
    {"name": "Paule Marcelle", "role": "Data Scientist", "image": "paule.jpg"},
    {"name": "Tony Sarré", "role": "Data Analyst | Data Scientist", "image": "tony.jpg"},
    {"name": "Yaya Touré", "role": "Ingénieur en modélisation", "image": "yaya.jpg"}
]


@router.get("/team")
async def get_team():
    return {"team": team_members}
