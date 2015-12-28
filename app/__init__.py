if __name__ == '__main__':
    from flask import Flask
    app = Flask(__name__)
    from app.quora import views
    app.register_blueprint(views.mod)
