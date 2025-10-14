from pydantic_settings import BaseSettings
from typing import Optional
import os
from dotenv import load_dotenv

# Load environment variables, preferring a user-specified file if present
# Search order:
# 1) BACKEND_ENV_FILE env var
# 2) Hardcoded path provided by user (Windows path)
# 3) Local .env files fallback
preferred_paths = [
    os.getenv("BACKEND_ENV_FILE"),
    r"C:\Users\sachin\OneDrive\Desktop\backend.env",
    os.path.join(os.getcwd(), ".env"),
]

loaded = False
for env_path in preferred_paths:
    if env_path and os.path.exists(env_path):
        load_dotenv(dotenv_path=env_path, override=True)
        loaded = True
        break

if not loaded:
    load_dotenv()

class Settings(BaseSettings):
    database_url: str = os.getenv("DATABASE_URL", "sqlite:///./health_predict.db")
    gemini_api_key: str = os.getenv("GEMINI_API_KEY", "AIzaSyBHDQsHUazLBmYpqE28VZGS7LREHlenJ5o")
    gemini_model_name: str = os.getenv("GEMINI_MODEL_NAME", "gemini-2.0-flash-exp")
    secret_key: str = os.getenv("SECRET_KEY", "your-secret-key-here")
    algorithm: str = os.getenv("ALGORITHM", "HS256")
    access_token_expire_minutes: int = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", "30"))

    class Config:
        env_file = ".env"

settings = Settings()