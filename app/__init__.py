from flask import Flask
app = Flask(__name__)

from app.quora import views as quora_views

app.register_blueprint(quora_views.mod, url_prefix='/quoracard')
