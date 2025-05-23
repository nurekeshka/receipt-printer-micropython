from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .models import CodeSnippet
from .services import RaspberryConnector


app = FastAPI()
service = RaspberryConnector()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/api/micropython")
def bootstrap(body: CodeSnippet):
    message = service.write(body.code)
    return {"status": "done", "message": message}
