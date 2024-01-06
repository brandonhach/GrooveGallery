from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
import os 
from routes.client_routes import create_client_blueprint
from repositories.client_repository import ClientRepository
from services.client_service import ClientService
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_jwt_extended import JWTManager

load_dotenv()
app = Flask(__name__)
app.config['DEBUG'] = True

# Postgres Local DB
app.config['SQLALCHEMY_DATABASE_URI'] = f'postgresql://{os.getenv("DB_USER")}:{os.getenv("DB_PASS")}@{os.getenv("DB_HOST")}:{os.getenv("DB_PORT")}/{os.getenv("DB_NAME")}'

# Flask JWT config
app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY")

# Setup for extensions
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)
CORS(app)

# Repository and service instances
client_repository = ClientRepository(db.session)
client_service = ClientService(client_repository, bcrypt)

# Blueprints
app.register_blueprint(create_client_blueprint(client_service), url_prefix='/flask/api')


if __name__ == "__main__":
    app.run()
