from fastapi import FastAPI, HTTPException, Path, Body
from pydantic import BaseModel
from sqlalchemy import Column, Integer, String, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session

# FastAPI 앱 생성
app = FastAPI()

# 데이터베이스 설정
DATABASE_URL = "sqlite:///./test.db"
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# 데이터베이스 모델
class UserDB(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    age = Column(Integer)

# 데이터베이스 초기화
Base.metadata.create_all(bind=engine)

# Pydantic 모델
class User(BaseModel):
    username: str
    email: str
    age: int

# Dependency: 데이터베이스 세션
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# 회원 등록
@app.post("/users/{user_id}")
async def create_user(user_id: int = Path(...), user: User = Body(...), db: Session = Depends(get_db)):
    if db.query(UserDB).filter(UserDB.id == user_id).first():
        raise HTTPException(status_code=400, detail="User ID already exists")
    db.user = UserDB(id=user_id,username=user.username, email= user.email, age=user.age)
    db.add(db.user)
    db.commit()
    return {"message": "회원 정보가 추가되었습니다","user":db.user}

# 회원 조회
@app.get("/users/{user_id}")
async def get_user(user_id: int = Path(...), db: Session = Depends(get_db)):
    user = db.query(UserDB).filter(UserDB.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail= "User not found")
    return {"user": user}

#회원 수정
@app.put("/users/{user_id}")
async def update_user(user_id: int = Path(..., ge=1), user:User = Body(...), db: Session = Depends(get_db)):
    db_user = db.query(UserDB).filter(UserDB.id == user_id).first()
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")
    db_user.username = user.username
    db_user.email = user.email
    db_user.age = user.age
    db.commit()
    db.refresh(db_user)
    return {"message":"user updated", "user": db_user}

#회원 삭제
@app.delete("/users/{user_id}")
async def update_user(user_id: int = Path(..., ge=1), db: Session = Depends(get_db)):
    db_user = db.query(UserDB).filter(UserDB.id == user.id).first()
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")
    db.delete(db_user)
    db.commit()
    return {"message": f"User ID {user_id} deleted"}