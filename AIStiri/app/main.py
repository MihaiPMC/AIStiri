from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import os
import uvicorn

app = FastAPI()

# Mount the static directory
static_dir = os.path.join(os.path.dirname(__file__), "static")
app.mount("/static", StaticFiles(directory=static_dir), name="static")

@app.get("/")
def read_index():
    # Serve the index.html file from the templates directory
    file_path = os.path.join(os.path.dirname(__file__), "templates", "index.html")
    return FileResponse(file_path, media_type="text/html")

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)