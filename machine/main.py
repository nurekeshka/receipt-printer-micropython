from fastapi import FastAPI
from fastapi.middleware import Middleware
from fastapi.middleware.cors import CORSMiddleware
from .models import CodeSnippet
from .services import RaspberryConnector


app = FastAPI(
    middleware=[
        Middleware(
            CORSMiddleware,
            allow_origins=["*"],
            allow_methods=["*"],
            allow_headers=["*"],
        )
    ]
)

service = RaspberryConnector()


@app.post("/api/micropython")
def bootstrap(body: CodeSnippet):
    message = service.write(body.code)
    return {"status": "done", "message": message}
