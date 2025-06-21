# # api/models.py

# from fastapi import APIRouter

# router = APIRouter()

# models_info = [
#     {
#         "name": "TuberculosisDetect v1",
#         "disease": "Tuberculose",
#         "technology": "CNN (64x64, RGB)",
#         "accuracy": 93.5,
#         "resolution": "Basique"
#     },
#     {
#         "name": "TuberculosisDetect v2",
#         "disease": "Tuberculose",
#         "technology": "CNN (256x256, RGB)",
#         "accuracy": 96.2,
#         "resolution": "Haute"
#     },
#     {
#         "name": "PneumoniaDetect",
#         "disease": "Pneumonie",
#         "technology": "CNN (64x64, RGB)",
#         "accuracy": 91.8,
#         "resolution": "Basique"
#     }
# ]

# @router.get("/models-info")
# async def get_models_info():
#     return {"models": models_info}








from fastapi import APIRouter

router = APIRouter()

@router.get("/models")
async def list_models():
    return [
        {
            "name": "TuberculosisDetect v1",
            "domain": "Santé",
            "description": "Détection automatique de la tuberculose sur radiographie thoracique.",
            "accuracy": 93.5,
            "image": "/static/images/tb.jpg",      # À placer dans un dossier static
            "endpoint": "/api/analyze/tuberculosis/v1",
            "status": "Disponible"
        },
        {
            "name": "TuberculosisDetect v2",
            "domain": "Santé",
            "description": "Version améliorée haute résolution (256x256 px) pour la détection de tuberculose.",
            "accuracy": 96.2,
            "image": "/static/images/tb2.jpg",
            "endpoint": "/api/analyze/tuberculosis/v2",
            "status": "Disponible"
        },
        {
            "name": "PneumoniaDetect",
            "domain": "Santé",
            "description": "Détection automatique de la pneumonie sur radiographie.",
            "accuracy": 91.8,
            "image": "/static/images/pneumonia.jpg",
            "endpoint": "/api/analyze/pneumonia",
            "status": "Disponible"
        }
    ]
                             