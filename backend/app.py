


# code qui marche super bien localement

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from core.settings import ALLOWED_ORIGINS

# Routers existants
from api.prediction import router as prediction_router
from api.disease import router as disease_router
from api.team import router as team_router
from api.contact import router as contact_router
from api.models import router as models_router
from api.formations import router as formations_router
from api.news import router as news_router

# Nouveau router admin
from api.admin import router as admin_router

app = FastAPI(
    title="TeamAI Solutions API",
    description="API complète avec interface d'administration",
    version="2.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers existants
app.include_router(prediction_router, prefix="/api/analyze", tags=["AI Analysis"])
app.include_router(disease_router, prefix="/api/disease-info", tags=["Disease Info"])
app.include_router(team_router, prefix="/api", tags=["Team"])
app.include_router(contact_router, prefix="/api/contact", tags=["Contact"])
app.include_router(models_router, prefix="/api", tags=["Models"])
app.include_router(formations_router, prefix="/api", tags=["Formations"])
app.include_router(news_router, prefix="/api", tags=["News"])

# Nouveau router admin (AJOUTÉ)
app.include_router(admin_router, tags=["Admin"])

@app.get("/", tags=["Root"])
def root():
    return {
        "message": "API TeamAI Solutions avec Administration 🟢",
        "version": "2.0.0",
        "features": [
            "AI Model Prediction",
            "Disease Information",
            "Team Management", 
            "Contact System",
            "Formations Management",
            "News Management",
            "Admin Dashboard"
        ],
        "admin_endpoints": {
            "login": "/api/auth/login",
            "formations": "/api/admin/formations",
            "news": "/api/admin/news", 
            "models": "/api/admin/models",
            "team": "/api/admin/team",
            "contacts": "/api/admin/contacts",
            "stats": "/api/admin/stats"
        }
    }

@app.get("/health", tags=["Health"])
def health_check():
    """Point de contrôle de santé de l'API"""
    return {
        "status": "healthy",
        "message": "API TeamAI Solutions opérationnelle",
        "admin_ready": True
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True)





# # code update for deployment
# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware
# from fastapi.staticfiles import StaticFiles
# from fastapi.responses import FileResponse
# import os
# from pathlib import Path

# from core.settings import ALLOWED_ORIGINS

# # Routers existants
# from api.prediction import router as prediction_router
# from api.disease import router as disease_router
# from api.team import router as team_router
# from api.contact import router as contact_router
# from api.models import router as models_router
# from api.formations import router as formations_router
# from api.news import router as news_router
# # Nouveau router admin
# from api.admin import router as admin_router

# app = FastAPI(
#     title="TeamAI Solutions API",
#     description="API complète avec interface d'administration",
#     version="2.0.0"
# )

# # CORS - Ajouter l'URL de production Railway
# production_origins = ALLOWED_ORIGINS.copy()
# if os.getenv("RAILWAY_PUBLIC_DOMAIN"):
#     production_origins.append(f"https://{os.getenv('RAILWAY_PUBLIC_DOMAIN')}")

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=production_origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Routers existants (tous avec /api prefix pour éviter les conflits)
# app.include_router(prediction_router, prefix="/api/analyze", tags=["AI Analysis"])
# app.include_router(disease_router, prefix="/api/disease-info", tags=["Disease Info"])
# app.include_router(team_router, prefix="/api", tags=["Team"])
# app.include_router(contact_router, prefix="/api/contact", tags=["Contact"])
# app.include_router(models_router, prefix="/api", tags=["Models"])
# app.include_router(formations_router, prefix="/api", tags=["Formations"])
# app.include_router(news_router, prefix="/api", tags=["News"])
# app.include_router(admin_router, tags=["Admin"])

# # Configuration pour servir React en production
# if os.getenv("RAILWAY_ENVIRONMENT") or os.getenv("RENDER"):
#     # Chemin vers le build React
#     static_dir = Path(__file__).parent.parent / "frontend" / "build"
    
#     if static_dir.exists():
#         # Servir les fichiers statiques React
#         app.mount("/static", StaticFiles(directory=static_dir / "static"), name="static")
        
#         # Route pour servir l'app React (catch-all pour SPA)
#         @app.get("/{full_path:path}")
#         async def serve_react_app(full_path: str):
#             # Ne pas intercepter les routes API
#             if full_path.startswith("api/") or full_path.startswith("docs") or full_path.startswith("redoc"):
#                 return {"error": "Endpoint not found"}
            
#             # Servir les fichiers spécifiques s'ils existent
#             file_path = static_dir / full_path
#             if file_path.is_file():
#                 return FileResponse(file_path)
            
#             # Fallback vers index.html pour toutes les autres routes (SPA routing)
#             return FileResponse(static_dir / "index.html")

# @app.get("/", tags=["Root"])
# def root():
#     return {
#         "message": "API TeamAI Solutions avec Administration 🟢",
#         "version": "2.0.0",
#         "features": [
#             "AI Model Prediction",
#             "Disease Information",
#             "Team Management", 
#             "Contact System",
#             "Formations Management",
#             "News Management",
#             "Admin Dashboard"
#         ],
#         "admin_endpoints": {
#             "login": "/api/auth/login",
#             "formations": "/api/admin/formations",
#             "news": "/api/admin/news", 
#             "models": "/api/admin/models",
#             "team": "/api/admin/team",
#             "contacts": "/api/admin/contacts",
#             "stats": "/api/admin/stats"
#         }
#     }

# @app.get("/health", tags=["Health"])
# def health_check():
#     """Point de contrôle de santé de l'API"""
#     return {
#         "status": "healthy",
#         "message": "API TeamAI Solutions opérationnelle",
#         "admin_ready": True
#     }

# if __name__ == "__main__":
#     import uvicorn
#     port = int(os.getenv("PORT", 8000))
#     uvicorn.run("app:app", host="0.0.0.0", port=port, reload=False)