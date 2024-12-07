# app/models.py
from sqlalchemy import Column, Integer, String, DateTime, Text, ForeignKey
from sqlalchemy.orm import relationship
from .database import Base

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, index=True, nullable=False)
    password_hash = Column(String(255), nullable=False)
    preferences = Column(Text)

class Article(Base):
    __tablename__ = 'articles'
    id = Column(Integer, primary_key=True, index=True)
    title = Column(Text)
    url = Column(Text)
    source = Column(String(255))
    published_at = Column(DateTime)
    raw_text = Column(Text)

class Summary(Base):
    __tablename__ = 'summaries'
    id = Column(Integer, primary_key=True, index=True)
    article_id = Column(Integer, ForeignKey('articles.id'))
    summary_text = Column(Text)
    article = relationship("Article", backref="summary")

class FactCheck(Base):
    __tablename__ = 'fact_checks'
    id = Column(Integer, primary_key=True, index=True)
    article_id = Column(Integer, ForeignKey('articles.id'))
    score = Column(Integer)
    article = relationship("Article", backref="fact_check")