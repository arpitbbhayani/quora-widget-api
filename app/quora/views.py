from flask import Blueprint, render_template, request

mod = Blueprint('simple_page', __name__, template_folder='templates')

@mod.route('/', methods=["GET"])
def index():
    return render_template('index.html')
