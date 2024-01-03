from flask import Blueprint, request, jsonify, make_response

def create_client_blueprint(client_service):    
    client_blueprint = Blueprint('client_blueprint', __name__)
    
    @client_blueprint.post('/register')
    def register():
        data = request.get_json()
        try:
            client_service.create_user(data['username'], data['email'], data['password'])
            return jsonify({"message": "Registration successful"}), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 400
    
    @client_blueprint.post('/login')
    def login():
        data = request.get_json()
        try:
            session = client_service.authenticate_user(data['username'], data['password'])
            if session:
                return jsonify({"message": "Login successful"}), 200
            else:
                return jsonify({"message": "Invalid username or password"}), 401
        except Exception as e:
            return jsonify({"error": str(e)}), 400
        
    return client_blueprint
        
    
    
   
# @client_blueprint.post('/login') 
# def login():
    

    
