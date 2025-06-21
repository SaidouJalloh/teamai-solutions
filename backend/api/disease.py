# api/disease.py

from fastapi import APIRouter, HTTPException

router = APIRouter()

disease_info = {
    "tuberculosis": {
        "Description": "La tuberculose (TB) est une maladie infectieuse ...",
        "Prévention": "Vaccination, mesures d’hygiène ...",
        "Traitements": "Antibiotiques adaptés, suivi médical ...",
    },
    "pneumonia": {
        "Description": "La pneumonie est une infection des poumons ...",
        "Prévention": "Vaccination, mesures préventives ...",
        "Traitements": "Traitement selon la cause (bactérienne/virale)...",
    },
}

@router.get("/{disease}/{topic}")
async def get_disease_info(disease: str, topic: str):
    if disease in disease_info and topic in disease_info[disease]:
        return {"info": disease_info[disease][topic]}
    else:
        raise HTTPException(status_code=404, detail="Information non trouvée")
