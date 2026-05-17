import os
import secrets
import sqlite3
from pathlib import Path

from flask import Flask, jsonify, request, send_from_directory, session
from werkzeug.security import check_password_hash, generate_password_hash


BASE_DIR = Path(__file__).resolve().parent
DATABASE = BASE_DIR / "data" / "kit72.sqlite3"


def create_app():
    app = Flask(__name__, static_folder=None)
    app.secret_key = os.environ.get("KIT72_SECRET_KEY", secrets.token_hex(32))
    app.config.update(
        SESSION_COOKIE_HTTPONLY=True,
        SESSION_COOKIE_SAMESITE="Strict",
        SESSION_COOKIE_SECURE=os.environ.get("KIT72_COOKIE_SECURE") == "1",
    )

    init_db()

    @app.get("/")
    def home():
        return send_from_directory(BASE_DIR, "index.html")

    @app.get("/assets/<path:filename>")
    def assets(filename):
        return send_from_directory(BASE_DIR / "assets", filename)

    @app.get("/pages/<path:filename>")
    def pages(filename):
        return send_from_directory(BASE_DIR / "pages", filename)

    @app.get("/api/me")
    def me():
        user = session.get("user")
        return jsonify({"user": user})

    @app.post("/api/register")
    def register():
        data = request.get_json(silent=True) or {}
        name = (data.get("name") or "").strip()
        email = (data.get("email") or "").strip().lower()
        password = data.get("password") or ""

        if len(name) < 2:
            return jsonify({"error": "El nombre debe tener al menos 2 caracteres."}), 400
        if "@" not in email or "." not in email:
            return jsonify({"error": "Introduce un correo valido."}), 400
        if len(password) < 8:
            return jsonify({"error": "La contrasena debe tener al menos 8 caracteres."}), 400

        try:
            with get_db() as db:
                db.execute(
                    "INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)",
                    (name, email, generate_password_hash(password)),
                )
                db.commit()
        except sqlite3.IntegrityError:
            return jsonify({"error": "Ya existe una cuenta con ese correo."}), 409

        session["user"] = {"name": name, "email": email}
        return jsonify({"user": session["user"]}), 201

    @app.post("/api/login")
    def login():
        data = request.get_json(silent=True) or {}
        email = (data.get("email") or "").strip().lower()
        password = data.get("password") or ""

        with get_db() as db:
            user = db.execute(
                "SELECT name, email, password_hash FROM users WHERE email = ?",
                (email,),
            ).fetchone()

        if user is None or not check_password_hash(user["password_hash"], password):
            return jsonify({"error": "Correo o contrasena incorrectos."}), 401

        session["user"] = {"name": user["name"], "email": user["email"]}
        return jsonify({"user": session["user"]})

    @app.post("/api/logout")
    def logout():
        session.clear()
        return jsonify({"ok": True})

    return app


def get_db():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    DATABASE.parent.mkdir(exist_ok=True)
    with get_db() as db:
        db.execute(
            """
            CREATE TABLE IF NOT EXISTS users (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT NOT NULL,
              email TEXT NOT NULL UNIQUE,
              password_hash TEXT NOT NULL,
              created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
            )
            """
        )
        db.commit()


app = create_app()


if __name__ == "__main__":
    app.run(debug=True)
