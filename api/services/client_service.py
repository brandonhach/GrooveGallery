from models.Client import Client
from utilities.auth_utils import hash_password, auth_client

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
       return auth_client(self.client_repository.get_hashed_password(username), password, self.bcrypt)
       