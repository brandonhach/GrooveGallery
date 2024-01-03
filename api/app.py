from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
import os 
from routes.client_routes import create_client_blueprint
from repositories.client_repository import ClientRepository
from services.client_service import ClientService
from flask_bcrypt import Bcrypt
from flask_cors import CORS

load_dotenv()
app = Flask(__name__)
app.config['DEBUG'] = True

# Postgres Local DB
app.config['SQLALCHEMY_DATABASE_URI'] = f'postgresql://{os.getenv("DB_USER")}:{os.getenv("DB_PASS")}@{os.getenv("DB_HOST")}:{os.getenv("DB_PORT")}/{os.getenv("DB_NAME")}'

db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
CORS(app)

# Create repository and service instances
client_repository = ClientRepository(db.session)
client_service = ClientService(client_repository, bcrypt)

# Blueprints
app.register_blueprint(create_client_blueprint(client_service), url_prefix='/api')

@app.route("/api/healthchecker", methods=["GET"])
def healthchecker():
    try:
        print("Database connected successfully.")
    except Exception as e:
        print("Failed to connect to the database.")
        print(e)
    return {"status": "success", "message": "Integrate Flask Framework with Next.js"}

if __name__ == "__main__":
    app.run()
