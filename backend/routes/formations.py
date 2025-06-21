from fastapi import APIRouter
from pydantic import BaseModel
from typing import List

router = APIRouter()

# ===== MODELE =====
class Formation(BaseModel):
    id: int
    title: str
    description: str
    trainer: str
    duration: str
    level: str
    date: str
    link: str

# ======= MOCK DATA =======
formations = [
    Formation(
        id=1,
        title="Introduction à l’IA et Productivité",
        description="Comprendre les fondamentaux de l’intelligence artificielle et comment l’utiliser pour booster son efficacité au travail.",
        trainer="Mamadou Saidou Diallo",
        duration="2h30",
        level="Débutant",
        date="22 juin 2025",
        link="#"
    ),
    Formation(
        id=2,
        title="Machine Learning pour la Santé",
        description="Découvrez les principaux algorithmes de ML appliqués à la santé et mettez-les en pratique sur des cas réels.",
        trainer="Paule Marcelle",
        duration="3h",
        level="Intermédiaire",
        date="29 juin 2025",
        link="#"
    ),
    Formation(
        id=3,
        title="Automatisation des tâches avec Python",
        description="Apprenez à automatiser vos tâches quotidiennes grâce à Python et aux outils d’IA.",
        trainer="Tony Sarré",
        duration="2h",
        level="Débutant",
        date="6 juillet 2025",
        link="#"
    )
]

# ======= ROUTES =======
@router.get("/formations", response_model=List[Formation])
def get_formations():
    return formations
