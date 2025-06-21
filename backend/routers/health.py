# # backend/routers/health.py
# from fastapi import APIRouter, UploadFile, File, HTTPException
# from PIL import Image
# import io

# router = APIRouter(prefix="/api/health", tags=["health"])

# # Vos fonctions d'analyse et routes existantes pour la santé
# @router.post("/analyze/tuberculosis/v1")
# async def analyze_tuberculosis_v1(file: UploadFile = File(...)):
#     # Code existant...
#     # pass