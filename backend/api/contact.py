# api/contact.py

from fastapi import APIRouter
from pydantic import BaseModel, EmailStr
from datetime import datetime

router = APIRouter()

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

contact_messages = []

@router.post("/")
async def submit_contact_form(contact: ContactForm):
    message_data = contact.dict()
    message_data["timestamp"] = datetime.now().isoformat()
    contact_messages.append(message_data)
    return {
        "status": "success",
        "message": "Votre message a été envoyé avec succès. Nous vous répondrons bientôt.",
        "timestamp": message_data["timestamp"]
    }

@router.get("/messages")
async def get_contact_messages():
    return {"messages": contact_messages}
