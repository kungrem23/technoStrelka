import datetime
import sqlalchemy
from sqlalchemy import orm
from .db_session import SqlAlchemyBase


class Pares(SqlAlchemyBase):
    __tablename__ = 'pares'

    id = sqlalchemy.Column(sqlalchemy.Integer,
                           primary_key=True, autoincrement=True)
    datePare = sqlalchemy.Column(sqlalchemy.Date)
    lessonName = sqlalchemy.Column(sqlalchemy.String)
    auditorium = sqlalchemy.Column(sqlalchemy.Integer)
    teacher = sqlalchemy.Column(sqlalchemy.String)
    group = sqlalchemy.Column(sqlalchemy.String)
    timePare = sqlalchemy.Column(sqlalchemy.String)
    # title = sqlalchemy.Column(sqlalchemy.String, nullable=True)
    # content = sqlalchemy.Column(sqlalchemy.String, nullable=True)
    # created_date = sqlalchemy.Column(sqlalchemy.DateTime,
    #                                  default=datetime.datetime.now)
    # is_private = sqlalchemy.Column(sqlalchemy.Boolean, default=True)
#
    # user_id = sqlalchemy.Column(sqlalchemy.Integer,
    #                             sqlalchemy.ForeignKey("users.id"))
    # user = orm.relationship('User')

    def get_dict(self):
        diction = {'id': self.id,
                   'datePare': self.datePare,
                   'lessonName': self.lessonName,
                   'auditorium': self.auditorium,
                   'teacher': self.teacher,
                   'group': self.group,
                   'timePare': self.timePare}
        return diction