from fastapi import FastAPI
from api import routes

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}