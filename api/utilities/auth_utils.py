def hash_password(password, bcrypt):
    return bcrypt.generate_password_hash(password, 12).decode()

def auth_client(user_password, password, bcrypt):
    return bcrypt.check_password_hash(user_password, password)