from fastapi import APIRouter, FastAPI

app = FastAPI(title="My API" , description="This is a very fancy project, with auto docs for the API and everything", version="0.1.0")
router = APIRouter()

app.include_router(router, prefix="/api", tags=["api"])

@router.get("/firstroute")
async def read_root():
    return {"message": "Hello World"}
