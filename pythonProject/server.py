from flask import Flask, redirect, render_template, jsonify
from data import db_session
from data.users import User
from data.jobs import Jobs
from data.news import News
from data.pare import Pares
from data.news_form import NewsForm
from data.test_table import testClass
from flask_login import LoginManager, login_user, login_required, logout_user, current_user
from flask_wtf import FlaskForm
from wtforms import EmailField, PasswordField, SubmitField, BooleanField, \
    StringField, TextAreaField, DateField, IntegerField, TimeField
from wtforms.validators import DataRequired
from flask_cors import CORS
import json
from werkzeug.security import generate_password_hash, check_password_hash
# from forms.user import RegisterForm
import datetime


class RegisterForm(FlaskForm):
    email = EmailField('Почта', validators=[DataRequired()])
    password = PasswordField('Пароль', validators=[DataRequired()])
    password_again = PasswordField('Повторите пароль', validators=[DataRequired()])
    name = StringField('Имя пользователя', validators=[DataRequired()])
    about = TextAreaField("Немного о себе")
    submit = SubmitField('Войти')


class LoginForm(FlaskForm):
    email = EmailField('Почта', validators=[DataRequired()])
    password = PasswordField('Пароль', validators=[DataRequired()])
    remember_me = BooleanField('Запомнить меня')
    submit = SubmitField('Войти')


class PareForm(FlaskForm):
    datePare = DateField('Дата пары', validators=[DataRequired()])
    lessonName = StringField('Название предмета', validators=[DataRequired()])
    auditorium = IntegerField('Аудитория', validators=[DataRequired()])
    teacher = StringField('Преподователь', validators=[DataRequired()])
    group = StringField('Группа', validators=[DataRequired()])
    timePare = TimeField('Время пары', validators=[DataRequired()])




app = Flask(__name__)
app.config['SECRET_KEY'] = 'yandexlyceum_secret_key'
login_manager = LoginManager()
login_manager.init_app(app)
db_session.global_init('db/pares.db')
# cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


@login_manager.user_loader
def load_user(user_id):
    db_sess = db_session.create_session()
    return db_sess.query(User).get(user_id)

@app.route('/get_pares', methods=['GET'])
def get_pares():
    db_sess = db_session.create_session()
    resp = []
    for i in db_sess.query(Pares).all():
        resp.append(i.get_dict())
    # return json.dumps(resp, indent=4)
    return jsonify(resp)


@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        db_sess = db_session.create_session()
        user = db_sess.query(User).filter(User.email == form.email.data).first()
        if user and user.check_password(form.password.data):
            login_user(user, remember=form.remember_me.data)
            return redirect("/")
        return render_template('login.html',
                               message="Неправильный логин или пароль",
                               form=form)
    return render_template('login.html', title='Авторизация', form=form)


@app.route('/register', methods=['GET', 'POST'])
def reqister():
    form = RegisterForm()
    if form.validate_on_submit():
        if form.password.data != form.password_again.data:
            return render_template('register.html', title='Регистрация',
                                   form=form,
                                   message="Пароли не совпадают")
        db_sess = db_session.create_session()
        if db_sess.query(User).filter(User.email == form.email.data).first():
            return render_template('register.html', title='Регистрация',
                                   form=form,
                                   message="Такой пользователь уже есть")
        user = User(
            name=form.name.data,
            email=form.email.data,
            # about=form.about.data
        )
        for i in db_sess.query(User).all():
            print(i)
        user.set_password(form.password.data)
        db_sess.add(user)
        db_sess.commit()
        return redirect('/login')
    return render_template('register.html', title='Регистрация', form=form)

@app.route("/")
def index():
    db_sess = db_session.create_session()
    news = db_sess.query(News).filter(News.is_private != True)
    if current_user.is_authenticated:
        news = db_sess.query(News).filter(
            (News.user == current_user) | (News.is_private != True))
    else:
        news = db_sess.query(News).filter(News.is_private != True)
    return render_template("index.html", news=news, position=current_user.position)

@app.route('/news',  methods=['GET', 'POST'])
@login_required
def add_news():
    form = NewsForm()
    if form.validate_on_submit():
        db_sess = db_session.create_session()
        news = News()
        news.title = form.title.data
        news.content = form.content.data
        news.is_private = form.is_private.data
        current_user.news.append(news)
        db_sess.merge(current_user)
        db_sess.commit()
        return redirect('/')
    return render_template('news.html', title='Добавление новости',
                           form=form)


def main():
    # db_session.global_init(input())
    # db_sess = db_session.create_session()
    # for i in db_sess.query(User).all():
    #     print('<Colonist>', i.id, i.surname, i.name)
    app.run(port=8080, host='127.0.0.1')

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect("/login")


if __name__ == '__main__':
    main()

# db_session.global_init('db/pares.db')
# user = User(
#     login = 'zxcghoul'
# )
# user.set_password('12345678')
# pare = Pares(
#     datePare=datetime.date.today(),
#     lessonName='infa',
#     auditorium=456,
#     teacher='zubenko mikhail petrovich',
#     group='it u 22',
#     timePare='15:45-17:15'
# )
#
# db_sess = db_session.create_session()
# # db_sess.add(user)
# db_sess.add(pare)
# db_sess.commit()
# for i in db_sess.query(testClass).all():
#     print(i)