from models.Client import Client

class ClientRepository:
    def __init__(self, db_session) -> None:
        self.db_session = db_session
    
    def add_client(self, client):
        try: 
            self.db_session.add(client)
            self.db_session.commit()
        except Exception as e:
            self.db_session.rollback()
            raise e
    
    def get_hashed_password(self, username):
        client = self.db_session.query(Client).filter(Client.username == username).first()
        return client.password_hash
    
    def get_client_to_json(self, username):
        client = self.db_session.query(Client).filter(Client.username == username).first()
        
        if client:
            client_data = {
                "username": client.username,
                "email": client.email,
                "date_created": client.date_created
            }
            return client_data
        else:
            return {"message": "Client is not found. Bad username."}, 401
    



