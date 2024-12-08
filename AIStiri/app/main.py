from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import os
import uvicorn
from starlette.responses import RedirectResponse

app = FastAPI()

# Mount the static directory
static_dir = os.path.join(os.path.dirname(__file__), "static")
app.mount("/static", StaticFiles(directory=static_dir), name="static")

@app.get("/")
def read_index():
    # Serve the index.html file from the templates directory
    file_path = os.path.join(os.path.dirname(__file__), "templates", "index.html")
    return FileResponse(file_path, media_type="text/html")

@app.get("/index.html")
def redirect_to_root():
    # Redirect /index.html to /
    return RedirectResponse(url="/")
@app.get("/login.html")
def read_login():
    # Serve the login.html file from the templates directory
    file_path = os.path.join(os.path.dirname(__file__), "templates", "login.html")
    return FileResponse(file_path, media_type="text/html")

@app.get("/signup.html")
def read_signup():
    # Serve the signup.html file from the templates directory
    file_path = os.path.join(os.path.dirname(__file__), "templates", "signup.html")
    return FileResponse(file_path, media_type="text/html")

@app.get("/forgotpass.html")
def read_forgotpass():
    # Serve the forgotpass.html file from the templates directory
    file_path = os.path.join(os.path.dirname(__file__), "templates", "forgotpass.html")
    return FileResponse(file_path, media_type="text/html")

@app.get("/cont.html")
def read_cont():
    # Serve the cont.html file from the templates directory
    file_path = os.path.join(os.path.dirname(__file__), "templates", "cont.html")
    return FileResponse(file_path, media_type="text/html")

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)