from flask import session, request, jsonify, make_response
from models.Client import Client
from utilities.auth_utils import hash_password, auth_client
from flask_jwt_extended import create_access_token

class ClientService:
    def __init__(self, client_repository , bcrypt):
        self.client_repository = client_repository
        self.bcrypt = bcrypt
    
    def create_user(self, username, email, password):
        hashed_password = hash_password(password, self.bcrypt)
        new_user = Client(username=username, email=email, password_hash=hashed_password)
        self.client_repository.add_client(new_user)
        return new_user
    
    def authenticate_user(self, username, password):
        if auth_client(self.client_repository.get_hashed_password(username), password, self.bcrypt):
            access_token = create_access_token(identity=username)
            return access_token, 200
        return None
       