# init_db.py
from app.database import Base, engine
from app.models import User, Article, Summary, FactCheck

# This will create all the tables based on the models defined in app/models.py
Base.metadata.create_all(bind=engine)