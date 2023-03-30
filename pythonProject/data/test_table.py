import datetime
import sqlalchemy
from .db_session import SqlAlchemyBase
from flask_login import UserMixin
from sqlalchemy import orm
from werkzeug.security import generate_password_hash, check_password_hash


class testClass(SqlAlchemyBase, UserMixin):
    __tablename__ = '123'

    tesst = sqlalchemy.Column(sqlalchemy.Integer, primary_key=True)
    test = sqlalchemy.Column(sqlalchemy.String)

    # id = sqlalchemy.Column(sqlalchemy.Integer,
    #                        primary_key=True, autoincrement=True)
    # surname = sqlalchemy.Column(sqlalchemy.String, nullable=True)
    # name = sqlalchemy.Column(sqlalchemy.String, nullable=True)
    # age = sqlalchemy.Column(sqlalchemy.Integer, nullable=True)
    # position = sqlalchemy.Column(sqlalchemy.String, nullable=True)
    # speciality = sqlalchemy.Column(sqlalchemy.String, nullable=True)
    # address = sqlalchemy.Column(sqlalchemy.String, nullable=True)
    # email = sqlalchemy.Column(sqlalchemy.String, unique=True, nullable=True)
    # hashed_password = sqlalchemy.Column(sqlalchemy.String, nullable=True)
    # modified_date = sqlalchemy.Column(sqlalchemy.DateTime, default=datetime.datetime.now)
    # jobs = orm.relationship("Jobs", back_populates='user')

    # id = sqlalchemy.Column(sqlalchemy.Integer,
    #                        primary_key=True, autoincrement=True)
    # login = sqlalchemy.Column(sqlalchemy.String, nullable=True)
    # hashed_password = sqlalchemy.Column(sqlalchemy.String, nullable=True)

    def set_password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.hashed_password, password)