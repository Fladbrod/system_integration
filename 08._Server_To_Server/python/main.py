from fastapi import FastAPI
import requests

app = FastAPI(title="My API",
              description="This is a very fancy project, with auto docs for the API and everything", version="0.1.0")


@app.get("/fastapiData")
def serve_data():
    return {"message": [1, 2, 3, 4, 5]}


@app.get("/expressApiData")
def get_express_api_data():
    response = requests.get('http://127.0.0.1:8080/expressData').json()
    return { "data": response }
