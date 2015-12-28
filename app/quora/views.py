from flask import Blueprint, render_template, request

mod = Blueprint('quora', __name__, template_folder='templates')

@mod.route('/', methods=["GET"])
def index():
    return render_template('quora_widget_base.html')
