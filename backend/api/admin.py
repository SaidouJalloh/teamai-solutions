# from fastapi import APIRouter, HTTPException, Depends, status
# from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
# from pydantic import BaseModel
# from typing import List, Optional
# import jwt
# from datetime import datetime, timedelta
# import bcrypt

# router = APIRouter()
# security = HTTPBearer()

# # Configuration JWT
# SECRET_KEY = "your-super-secret-key-change-in-production"
# ALGORITHM = "HS256"
# ACCESS_TOKEN_EXPIRE_HOURS = 24

# # === MODÈLES PYDANTIC ===

# class AdminLogin(BaseModel):
#     username: str
#     password: str

# class FormationCreate(BaseModel):
#     titre: str
#     description: Optional[str] = ""
#     niveau: str
#     date: Optional[str] = ""
#     duree: Optional[str] = ""
#     image_url: Optional[str] = ""
#     status: Optional[str] = "active"

# class FormationUpdate(BaseModel):
#     titre: Optional[str] = None
#     description: Optional[str] = None
#     niveau: Optional[str] = None
#     date: Optional[str] = None
#     duree: Optional[str] = None
#     image_url: Optional[str] = None
#     status: Optional[str] = None

# class NewsCreate(BaseModel):
#     title: str
#     content: str
#     category: str
#     summary: Optional[str] = ""
#     author: Optional[str] = ""
#     date: Optional[str] = ""
#     link: Optional[str] = ""
#     status: Optional[str] = "published"

# class NewsUpdate(BaseModel):
#     title: Optional[str] = None
#     content: Optional[str] = None
#     category: Optional[str] = None
#     summary: Optional[str] = None
#     author: Optional[str] = None
#     date: Optional[str] = None
#     link: Optional[str] = None
#     status: Optional[str] = None

# class ModelCreate(BaseModel):
#     name: str
#     model_type: str
#     description: Optional[str] = ""
#     technology: Optional[str] = ""
#     accuracy: Optional[float] = 0.0
#     input_size: Optional[str] = ""
#     version: Optional[str] = "1.0"
#     status: Optional[str] = "development"

# class ModelUpdate(BaseModel):
#     name: Optional[str] = None
#     model_type: Optional[str] = None
#     description: Optional[str] = None
#     technology: Optional[str] = None
#     accuracy: Optional[float] = None
#     input_size: Optional[str] = None
#     version: Optional[str] = None
#     status: Optional[str] = None

# class TeamMemberCreate(BaseModel):
#     name: str
#     role: str
#     department: Optional[str] = ""
#     bio: Optional[str] = ""
#     linkedin: Optional[str] = ""
#     photo: Optional[str] = ""
#     status: Optional[str] = "active"

# class TeamMemberUpdate(BaseModel):
#     name: Optional[str] = None
#     role: Optional[str] = None
#     department: Optional[str] = None
#     bio: Optional[str] = None
#     linkedin: Optional[str] = None
#     photo: Optional[str] = None
#     status: Optional[str] = None

# # === BASES DE DONNÉES TEMPORAIRES (à remplacer par vraie DB) ===

# # Base de données en mémoire (remplacez par une vraie DB)
# admin_users = {
#     "admin": {
#         "username": "admin",
#         "password": bcrypt.hashpw("teamai2024".encode('utf-8'), bcrypt.gensalt()).decode('utf-8'),
#         "role": "admin"
#     }
# }

# formations_db = []
# news_db = []
# models_db = []
# team_db = []
# contacts_db = []

# # === FONCTIONS UTILITAIRES ===

# def verify_password(plain_password: str, hashed_password: str) -> bool:
#     return bcrypt.checkpw(plain_password.encode('utf-8'), hashed_password.encode('utf-8'))

# def create_access_token(data: dict):
#     to_encode = data.copy()
#     expire = datetime.utcnow() + timedelta(hours=ACCESS_TOKEN_EXPIRE_HOURS)
#     to_encode.update({"exp": expire})
#     encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
#     return encoded_jwt

# def verify_token(token: str):
#     try:
#         payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
#         username: str = payload.get("username")
#         if username is None:
#             raise HTTPException(status_code=401, detail="Token invalide")
#         return payload
#     except jwt.ExpiredSignatureError:
#         raise HTTPException(status_code=401, detail="Token expiré")
#     except jwt.InvalidTokenError:
#         raise HTTPException(status_code=401, detail="Token invalide")

# def get_current_admin(credentials: HTTPAuthorizationCredentials = Depends(security)):
#     token = credentials.credentials
#     return verify_token(token)

# # === ROUTES D'AUTHENTIFICATION ===

# @router.post("/api/auth/login")
# async def admin_login(credentials: AdminLogin):
#     """Connexion administrateur"""
#     user = admin_users.get(credentials.username)
    
#     if not user or not verify_password(credentials.password, user["password"]):
#         raise HTTPException(
#             status_code=status.HTTP_401_UNAUTHORIZED,
#             detail="Identifiants incorrects"
#         )
    
#     access_token = create_access_token(data={
#         "username": user["username"],
#         "role": user["role"]
#     })
    
#     return {
#         "access_token": access_token,
#         "token_type": "bearer",
#         "user": {
#             "username": user["username"],
#             "role": user["role"]
#         }
#     }

# @router.get("/api/auth/validate")
# async def validate_token(current_user: dict = Depends(get_current_admin)):
#     """Validation du token"""
#     return {"valid": True, "user": current_user}

# @router.post("/api/auth/logout")
# async def logout(current_user: dict = Depends(get_current_admin)):
#     """Déconnexion (côté client principalement)"""
#     return {"message": "Déconnexion réussie"}

# # === ROUTES FORMATIONS ===

# @router.get("/api/admin/formations")
# async def get_formations_admin(current_user: dict = Depends(get_current_admin)):
#     """Récupérer toutes les formations (admin)"""
#     return formations_db

# @router.post("/api/admin/formations")
# async def create_formation_admin(
#     formation: FormationCreate,
#     current_user: dict = Depends(get_current_admin)
# ):
#     """Créer une nouvelle formation"""
#     new_formation = {
#         "id": len(formations_db) + 1,
#         **formation.dict(),
#         "created_at": datetime.utcnow().isoformat(),
#         "created_by": current_user["username"]
#     }
#     formations_db.append(new_formation)
#     return {"message": "Formation créée avec succès", "formation": new_formation}

# @router.put("/api/admin/formations/{formation_id}")
# async def update_formation_admin(
#     formation_id: int,
#     formation: FormationUpdate,
#     current_user: dict = Depends(get_current_admin)
# ):
#     """Mettre à jour une formation"""
#     for i, f in enumerate(formations_db):
#         if f["id"] == formation_id:
#             # Mettre à jour seulement les champs fournis
#             update_data = {k: v for k, v in formation.dict().items() if v is not None}
#             formations_db[i].update(update_data)
#             formations_db[i]["updated_at"] = datetime.utcnow().isoformat()
#             formations_db[i]["updated_by"] = current_user["username"]
#             return {"message": "Formation mise à jour", "formation": formations_db[i]}
    
#     raise HTTPException(status_code=404, detail="Formation non trouvée")

# @router.delete("/api/admin/formations/{formation_id}")
# async def delete_formation_admin(
#     formation_id: int,
#     current_user: dict = Depends(get_current_admin)
# ):
#     """Supprimer une formation"""
#     for i, f in enumerate(formations_db):
#         if f["id"] == formation_id:
#             deleted_formation = formations_db.pop(i)
#             return {"message": "Formation supprimée", "formation": deleted_formation}
    
#     raise HTTPException(status_code=404, detail="Formation non trouvée")

# # === ROUTES NEWS ===

# @router.get("/api/admin/news")
# async def get_news_admin(current_user: dict = Depends(get_current_admin)):
#     """Récupérer toutes les actualités (admin)"""
#     return news_db

# @router.post("/api/admin/news")
# async def create_news_admin(
#     news: NewsCreate,
#     current_user: dict = Depends(get_current_admin)
# ):
#     """Créer une nouvelle actualité"""
#     new_news = {
#         "id": len(news_db) + 1,
#         **news.dict(),
#         "created_at": datetime.utcnow().isoformat(),
#         "created_by": current_user["username"]
#     }
#     news_db.append(new_news)
#     return {"message": "Actualité créée avec succès", "news": new_news}

# @router.put("/api/admin/news/{news_id}")
# async def update_news_admin(
#     news_id: int,
#     news: NewsUpdate,
#     current_user: dict = Depends(get_current_admin)
# ):
#     """Mettre à jour une actualité"""
#     for i, n in enumerate(news_db):
#         if n["id"] == news_id:
#             update_data = {k: v for k, v in news.dict().items() if v is not None}
#             news_db[i].update(update_data)
#             news_db[i]["updated_at"] = datetime.utcnow().isoformat()
#             news_db[i]["updated_by"] = current_user["username"]
#             return {"message": "Actualité mise à jour", "news": news_db[i]}
    
#     raise HTTPException(status_code=404, detail="Actualité non trouvée")

# @router.delete("/api/admin/news/{news_id}")
# async def delete_news_admin(
#     news_id: int,
#     current_user: dict = Depends(get_current_admin)
# ):
#     """Supprimer une actualité"""
#     for i, n in enumerate(news_db):
#         if n["id"] == news_id:
#             deleted_news = news_db.pop(i)
#             return {"message": "Actualité supprimée", "news": deleted_news}
    
#     raise HTTPException(status_code=404, detail="Actualité non trouvée")

# # === ROUTES MODÈLES ===

# @router.get("/api/admin/models")
# async def get_models_admin(current_user: dict = Depends(get_current_admin)):
#     """Récupérer tous les modèles IA (admin)"""
#     return models_db

# @router.post("/api/admin/models")
# async def create_model_admin(
#     model: ModelCreate,
#     current_user: dict = Depends(get_current_admin)
# ):
#     """Créer un nouveau modèle IA"""
#     new_model = {
#         "id": len(models_db) + 1,
#         **model.dict(),
#         "created_at": datetime.utcnow().isoformat(),
#         "created_by": current_user["username"]
#     }
#     models_db.append(new_model)
#     return {"message": "Modèle créé avec succès", "model": new_model}

# @router.put("/api/admin/models/{model_id}")
# async def update_model_admin(
#     model_id: int,
#     model: ModelUpdate,
#     current_user: dict = Depends(get_current_admin)
# ):
#     """Mettre à jour un modèle IA"""
#     for i, m in enumerate(models_db):
#         if m["id"] == model_id:
#             update_data = {k: v for k, v in model.dict().items() if v is not None}
#             models_db[i].update(update_data)
#             models_db[i]["updated_at"] = datetime.utcnow().isoformat()
#             models_db[i]["updated_by"] = current_user["username"]
#             return {"message": "Modèle mis à jour", "model": models_db[i]}
    
#     raise HTTPException(status_code=404, detail="Modèle non trouvé")

# @router.delete("/api/admin/models/{model_id}")
# async def delete_model_admin(
#     model_id: int,
#     current_user: dict = Depends(get_current_admin)
# ):
#     """Supprimer un modèle IA"""
#     for i, m in enumerate(models_db):
#         if m["id"] == model_id:
#             deleted_model = models_db.pop(i)
#             return {"message": "Modèle supprimé", "model": deleted_model}
    
#     raise HTTPException(status_code=404, detail="Modèle non trouvé")

# # === ROUTES ÉQUIPE ===

# @router.get("/api/admin/team")
# async def get_team_admin(current_user: dict = Depends(get_current_admin)):
#     """Récupérer tous les membres de l'équipe (admin)"""
#     return team_db

# @router.post("/api/admin/team")
# async def create_team_member_admin(
#     member: TeamMemberCreate,
#     current_user: dict = Depends(get_current_admin)
# ):
#     """Ajouter un membre à l'équipe"""
#     new_member = {
#         "id": len(team_db) + 1,
#         **member.dict(),
#         "created_at": datetime.utcnow().isoformat(),
#         "created_by": current_user["username"]
#     }
#     team_db.append(new_member)
#     return {"message": "Membre ajouté avec succès", "member": new_member}

# @router.put("/api/admin/team/{member_id}")
# async def update_team_member_admin(
#     member_id: int,
#     member: TeamMemberUpdate,
#     current_user: dict = Depends(get_current_admin)
# ):
#     """Mettre à jour un membre de l'équipe"""
#     for i, m in enumerate(team_db):
#         if m["id"] == member_id:
#             update_data = {k: v for k, v in member.dict().items() if v is not None}
#             team_db[i].update(update_data)
#             team_db[i]["updated_at"] = datetime.utcnow().isoformat()
#             team_db[i]["updated_by"] = current_user["username"]
#             return {"message": "Membre mis à jour", "member": team_db[i]}
    
#     raise HTTPException(status_code=404, detail="Membre non trouvé")

# @router.delete("/api/admin/team/{member_id}")
# async def delete_team_member_admin(
#     member_id: int,
#     current_user: dict = Depends(get_current_admin)
# ):
#     """Supprimer un membre de l'équipe"""
#     for i, m in enumerate(team_db):
#         if m["id"] == member_id:
#             deleted_member = team_db.pop(i)
#             return {"message": "Membre supprimé", "member": deleted_member}
    
#     raise HTTPException(status_code=404, detail="Membre non trouvé")

# # === ROUTES CONTACTS ===

# @router.get("/api/admin/contacts")
# async def get_contacts_admin(current_user: dict = Depends(get_current_admin)):
#     """Récupérer tous les messages de contact (admin)"""
#     return contacts_db

# @router.put("/api/admin/contacts/{contact_id}")
# async def update_contact_status_admin(
#     contact_id: int,
#     status_data: dict,
#     current_user: dict = Depends(get_current_admin)
# ):
#     """Mettre à jour le statut d'un message de contact"""
#     for i, c in enumerate(contacts_db):
#         if c["id"] == contact_id:
#             contacts_db[i]["status"] = status_data.get("status", "new")
#             contacts_db[i]["updated_at"] = datetime.utcnow().isoformat()
#             contacts_db[i]["updated_by"] = current_user["username"]
#             return {"message": "Statut mis à jour", "contact": contacts_db[i]}
    
#     raise HTTPException(status_code=404, detail="Message non trouvé")

# @router.delete("/api/admin/contacts/{contact_id}")
# async def delete_contact_admin(
#     contact_id: int,
#     current_user: dict = Depends(get_current_admin)
# ):
#     """Supprimer un message de contact"""
#     for i, c in enumerate(contacts_db):
#         if c["id"] == contact_id:
#             deleted_contact = contacts_db.pop(i)
#             return {"message": "Message supprimé", "contact": deleted_contact}
    
#     raise HTTPException(status_code=404, detail="Message non trouvé")

# # === ROUTES STATISTIQUES ===

# @router.get("/api/admin/stats")
# async def get_admin_stats(current_user: dict = Depends(get_current_admin)):
#     """Récupérer les statistiques pour le dashboard"""
#     return {
#         "total_formations": len(formations_db),
#         "total_news": len(news_db),
#         "total_models": len(models_db),
#         "total_team_members": len(team_db),
#         "total_contacts": len(contacts_db),
#         "total_analyses": 5670,  # À adapter selon vos métriques
#         "recent_activity": [
#             {
#                 "type": "formation",
#                 "action": "created",
#                 "title": "Nouvelle formation ajoutée",
#                 "timestamp": datetime.utcnow().isoformat()
#             }
#         ]
#     }










from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

router = APIRouter()

# === MODÈLES PYDANTIC ===

class AdminLogin(BaseModel):
    username: str
    password: str

class FormationCreate(BaseModel):
    titre: str
    description: Optional[str] = ""
    niveau: str
    date: Optional[str] = ""
    duree: Optional[str] = ""
    image_url: Optional[str] = ""
    status: Optional[str] = "active"

class NewsCreate(BaseModel):
    title: str
    content: str
    category: str
    summary: Optional[str] = ""
    author: Optional[str] = ""
    date: Optional[str] = ""
    link: Optional[str] = ""
    status: Optional[str] = "published"

class ModelCreate(BaseModel):
    name: str
    model_type: str
    description: Optional[str] = ""
    technology: Optional[str] = ""
    accuracy: Optional[float] = 0.0
    input_size: Optional[str] = ""
    version: Optional[str] = "1.0"
    status: Optional[str] = "development"

class TeamMemberCreate(BaseModel):
    name: str
    role: str
    department: Optional[str] = ""
    bio: Optional[str] = ""
    linkedin: Optional[str] = ""
    photo: Optional[str] = ""
    status: Optional[str] = "active"

# === BASE DE DONNÉES EN MÉMOIRE ===

admin_users = {
    "admin": {
        "username": "admin",
        "password": "teamai2024",
        "role": "admin"
    }
}

formations_db = [
    {
        "id": 1,
        "titre": "Introduction à l'IA",
        "description": "Formation de base en intelligence artificielle",
        "niveau": "Débutant",
        "date": "2024-07-20",
        "duree": "8 semaines",
        "status": "active"
    },
    {
        "id": 2,
        "titre": "IA avancée pour la santé",
        "description": "Formation spécialisée en IA médicale",
        "niveau": "Avancé",
        "date": "2024-09-15", 
        "duree": "12 semaines",
        "status": "active"
    }
]

news_db = [
    {
        "id": 1,
        "title": "Lancement de notre nouveau modèle IA",
        "content": "Nous sommes fiers de présenter notre dernier modèle...",
        "category": "innovation",
        "date": "2024-06-01",
        "author": "Équipe TeamAI",
        "status": "published"
    },
    {
        "id": 2,
        "title": "Nouvelle formation en Machine Learning",
        "content": "Rejoignez notre programme de formation...",
        "category": "formation",
        "date": "2024-05-28",
        "author": "Dr. Martin Dubois",
        "status": "published"
    }
]

models_db = [
    {
        "id": 1,
        "name": "TuberculosisDetect v2.0",
        "model_type": "tuberculosis_v2",
        "description": "Modèle avancé de détection de tuberculose",
        "technology": "CNN + Transfer Learning",
        "accuracy": 95.8,
        "status": "production"
    },
    {
        "id": 2,
        "name": "PneumoniaDetect Pro",
        "model_type": "pneumonia",
        "description": "Détection de pneumonie haute précision",
        "technology": "ResNet50",
        "accuracy": 93.4,
        "status": "production"
    }
]

team_db = [
    {
        "id": 1,
        "name": "Dr. Sarah Johnson",
        "role": "CEO & Co-fondatrice",
        "department": "Direction",
        "bio": "Expert en IA avec 15 ans d'expérience",
        "status": "active"
    },
    {
        "id": 2,
        "name": "Alex Chen",
        "role": "Lead AI Engineer",
        "department": "Technique",
        "bio": "Spécialiste en deep learning",
        "status": "active"
    }
]

contacts_db = [
    {
        "id": 1,
        "name": "Jean Dupont",
        "email": "jean@example.com",
        "subject": "Formation IA",
        "message": "Je suis intéressé par vos formations...",
        "date": "2024-06-04",
        "status": "new"
    },
    {
        "id": 2,
        "name": "Marie Martin",
        "email": "marie@example.com",
        "subject": "Consulting",
        "message": "Nous aimerions discuter d'un projet...",
        "date": "2024-06-03",
        "status": "replied"
    }
]

# Session simple (en mémoire)
active_sessions = set()

# === AUTHENTIFICATION SIMPLE ===

@router.post("/api/auth/login")
async def admin_login(credentials: AdminLogin):
    """Connexion administrateur (version simplifiée)"""
    user = admin_users.get(credentials.username)
    
    if not user or credentials.password != user["password"]:
        raise HTTPException(status_code=401, detail="Identifiants incorrects")
    
    # Créer une session simple
    session_id = f"{credentials.username}_{datetime.utcnow().timestamp()}"
    active_sessions.add(session_id)
    
    return {
        "access_token": session_id,
        "token_type": "bearer",
        "user": {
            "username": user["username"],
            "role": user["role"]
        }
    }

@router.get("/api/auth/validate")
async def validate_token():
    """Validation simplifiée"""
    return {"valid": True, "message": "Token valide"}

# === ROUTES FORMATIONS ===

@router.get("/api/admin/formations")
async def get_formations_admin():
    """Récupérer toutes les formations"""
    return formations_db

@router.post("/api/admin/formations")
async def create_formation_admin(formation: FormationCreate):
    """Créer une nouvelle formation"""
    new_formation = {
        "id": len(formations_db) + 1,
        **formation.dict(),
        "created_at": datetime.utcnow().isoformat()
    }
    formations_db.append(new_formation)
    return {"message": "Formation créée", "formation": new_formation}

@router.put("/api/admin/formations/{formation_id}")
async def update_formation_admin(formation_id: int, formation: dict):
    """Mettre à jour une formation"""
    for i, f in enumerate(formations_db):
        if f["id"] == formation_id:
            formations_db[i].update(formation)
            formations_db[i]["updated_at"] = datetime.utcnow().isoformat()
            return {"message": "Formation mise à jour", "formation": formations_db[i]}
    
    raise HTTPException(status_code=404, detail="Formation non trouvée")

@router.delete("/api/admin/formations/{formation_id}")
async def delete_formation_admin(formation_id: int):
    """Supprimer une formation"""
    for i, f in enumerate(formations_db):
        if f["id"] == formation_id:
            deleted_formation = formations_db.pop(i)
            return {"message": "Formation supprimée", "formation": deleted_formation}
    
    raise HTTPException(status_code=404, detail="Formation non trouvée")

# === ROUTES NEWS ===

@router.get("/api/admin/news")
async def get_news_admin():
    """Récupérer toutes les actualités"""
    return news_db

@router.post("/api/admin/news")
async def create_news_admin(news: NewsCreate):
    """Créer une nouvelle actualité"""
    new_news = {
        "id": len(news_db) + 1,
        **news.dict(),
        "created_at": datetime.utcnow().isoformat()
    }
    news_db.append(new_news)
    return {"message": "Actualité créée", "news": new_news}

@router.put("/api/admin/news/{news_id}")
async def update_news_admin(news_id: int, news: dict):
    """Mettre à jour une actualité"""
    for i, n in enumerate(news_db):
        if n["id"] == news_id:
            news_db[i].update(news)
            news_db[i]["updated_at"] = datetime.utcnow().isoformat()
            return {"message": "Actualité mise à jour", "news": news_db[i]}
    
    raise HTTPException(status_code=404, detail="Actualité non trouvée")

@router.delete("/api/admin/news/{news_id}")
async def delete_news_admin(news_id: int):
    """Supprimer une actualité"""
    for i, n in enumerate(news_db):
        if n["id"] == news_id:
            deleted_news = news_db.pop(i)
            return {"message": "Actualité supprimée", "news": deleted_news}
    
    raise HTTPException(status_code=404, detail="Actualité non trouvée")

# === ROUTES MODÈLES ===

@router.get("/api/admin/models")
async def get_models_admin():
    """Récupérer tous les modèles"""
    return models_db

@router.post("/api/admin/models")
async def create_model_admin(model: ModelCreate):
    """Créer un nouveau modèle"""
    new_model = {
        "id": len(models_db) + 1,
        **model.dict(),
        "created_at": datetime.utcnow().isoformat()
    }
    models_db.append(new_model)
    return {"message": "Modèle créé", "model": new_model}

@router.put("/api/admin/models/{model_id}")
async def update_model_admin(model_id: int, model: dict):
    """Mettre à jour un modèle"""
    for i, m in enumerate(models_db):
        if m["id"] == model_id:
            models_db[i].update(model)
            models_db[i]["updated_at"] = datetime.utcnow().isoformat()
            return {"message": "Modèle mis à jour", "model": models_db[i]}
    
    raise HTTPException(status_code=404, detail="Modèle non trouvé")

@router.delete("/api/admin/models/{model_id}")
async def delete_model_admin(model_id: int):
    """Supprimer un modèle"""
    for i, m in enumerate(models_db):
        if m["id"] == model_id:
            deleted_model = models_db.pop(i)
            return {"message": "Modèle supprimé", "model": deleted_model}
    
    raise HTTPException(status_code=404, detail="Modèle non trouvé")

# === ROUTES ÉQUIPE ===

@router.get("/api/admin/team")
async def get_team_admin():
    """Récupérer tous les membres de l'équipe"""
    return team_db

@router.post("/api/admin/team")
async def create_team_member_admin(member: TeamMemberCreate):
    """Ajouter un membre à l'équipe"""
    new_member = {
        "id": len(team_db) + 1,
        **member.dict(),
        "created_at": datetime.utcnow().isoformat()
    }
    team_db.append(new_member)
    return {"message": "Membre ajouté", "member": new_member}

@router.put("/api/admin/team/{member_id}")
async def update_team_member_admin(member_id: int, member: dict):
    """Mettre à jour un membre de l'équipe"""
    for i, m in enumerate(team_db):
        if m["id"] == member_id:
            team_db[i].update(member)
            team_db[i]["updated_at"] = datetime.utcnow().isoformat()
            return {"message": "Membre mis à jour", "member": team_db[i]}
    
    raise HTTPException(status_code=404, detail="Membre non trouvé")

@router.delete("/api/admin/team/{member_id}")
async def delete_team_member_admin(member_id: int):
    """Supprimer un membre de l'équipe"""
    for i, m in enumerate(team_db):
        if m["id"] == member_id:
            deleted_member = team_db.pop(i)
            return {"message": "Membre supprimé", "member": deleted_member}
    
    raise HTTPException(status_code=404, detail="Membre non trouvé")

# === ROUTES CONTACTS ===

@router.get("/api/admin/contacts")
async def get_contacts_admin():
    """Récupérer tous les messages de contact"""
    return contacts_db

@router.put("/api/admin/contacts/{contact_id}")
async def update_contact_status_admin(contact_id: int, status_data: dict):
    """Mettre à jour le statut d'un message"""
    for i, c in enumerate(contacts_db):
        if c["id"] == contact_id:
            contacts_db[i]["status"] = status_data.get("status", "new")
            contacts_db[i]["updated_at"] = datetime.utcnow().isoformat()
            return {"message": "Statut mis à jour", "contact": contacts_db[i]}
    
    raise HTTPException(status_code=404, detail="Message non trouvé")

@router.delete("/api/admin/contacts/{contact_id}")
async def delete_contact_admin(contact_id: int):
    """Supprimer un message de contact"""
    for i, c in enumerate(contacts_db):
        if c["id"] == contact_id:
            deleted_contact = contacts_db.pop(i)
            return {"message": "Message supprimé", "contact": deleted_contact}
    
    raise HTTPException(status_code=404, detail="Message non trouvé")

# === STATISTIQUES ===

@router.get("/api/admin/stats")
async def get_admin_stats():
    """Récupérer les statistiques du dashboard"""
    return {
        "total_formations": len(formations_db),
        "total_news": len(news_db),
        "total_models": len(models_db),
        "total_team_members": len(team_db),
        "total_contacts": len(contacts_db),
        "total_analyses": 5670
    }