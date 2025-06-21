# Dans core/settings.py
ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:3001",  # Au cas où vous utilisez un autre port
    # Ajoutez votre domaine de production ici
]

# Nouvelles variables pour l'admin (optionnel)
ADMIN_SECRET_KEY = "Imamsaid@95"
ADMIN_TOKEN_EXPIRE_HOURS = 24