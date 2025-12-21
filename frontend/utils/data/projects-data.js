export const projectsData = [
    {
        id: 1,
        name: 'Chat App (PyQt5 & WebSockets)',
        description: 'Built a real-time chat application using PyQt5, python-socketio (aiohttp), and MongoDB Atlas, supporting public/private messaging and typing indicators. Deployed on Render.com and packaged standalone Windows/Linux executables using PyInstaller.',
        tools: ['PyQt5', 'python-socketio', 'MongoDB', 'Render.com', 'PyInstaller'],
        role: 'Full Stack Developer',
        code: 'https://github.com/kuldeepghorpade05/PyQt_Chat_with_MongoDB.git',
        demo: '',
    },
    {
        id: 2,
        name: 'WE-KEEP (Django SaaS Notes)',
        description: "Full-Stack SaaS Note App: Built with Django + DRF, PostgreSQL (Neon Cloud DB), and Tailwind CSS, featuring Django Auth & Google OAuth (Allauth) for secure authentication. Fully Dockerized & deployed on GCP VM with NGINX reverse proxy, Let’s Encrypt SSL, and DuckDNS domain, maintained a Git branching strategy, daily documentation, and CI/CD-ready setup.",
        tools: ['Django', 'DRF', 'PostgreSQL', 'Tailwind CSS', 'Google OAuth', 'Docker', 'GCP', 'NGINX', 'DuckDNS'],
        role: 'Full Stack Developer',
        code: 'https://github.com/kuldeepghorpade05/WE-KEEP.git',
        demo: 'https://wekeep.duckdns.org/',
    },
    {
        id: 3,
        name: 'FastAPI Async Backend',
        description: 'FastAPI Async Beyond CRUD – A production-ready, asynchronous FastAPI backend. Fully containerized with Docker & Docker Compose, secured with Nginx + Certbot (HTTPS). Uses Redis + Celery for background tasks, SQLAlchemy + Alembic for ORM & migrations, Neon PostgreSQL as the production database, with JWT auth, AWS EC2 hosting, and DuckDNS with a CI/CD-ready.',
        tools: ['FastAPI', 'Docker', 'Nginx', 'Redis', 'Celery', 'SQLAlchemy', 'PostgreSQL', 'JWT', 'AWS EC2'],
        role: 'Backend Developer',
        code: 'https://github.com/kuldeepghorpade05/fastapi-async-beyond-crud.git',
        demo: '',
    },
    {
        id: 4,
        name: 'FastAPI Google OAuth 2.0',
        description: 'A secure authentication backend built with FastAPI and Authlib, integrating Google OAuth 2.0 with session-based authentication, CSRF protection, & secure cookies. Uses Starlette Sessions, ItsDangerous, & HTTPX for async session handling, with Pydantic & python-dotenv for environment-driven configuration. Secured via CORS, HTTPS, & state-based CSRF protection.',
        tools: ['FastAPI', 'Authlib', 'Google OAuth 2.0', 'Starlette Sessions', 'HTTPX', 'Pydantic'],
        role: 'Backend Developer',
        code: 'https://github.com/kuldeepghorpade05/Google_OAuth_with_FastAPI.git',
        demo: '',
    },
    {
        id: 5,
        name: 'Flask InkCircle (REST API)',
        description: "Scalable, Flask backend with modular architecture, built with Flask-RESTX (Swagger), MongoDB via PyMongo & MongoEngine, MongoAtlas, Celery + Redis, JWT auth, Flask-CORS, bcrypt & passlib, python-jose & itsdangerous, Marshmallow, Flask-Mail (Gmail), python-dotenv, & secure error handling. Fully Dockerized with Docker Compose, Poetry-managed dependencies, CI/CD-ready Git branching, Deployed on AWS EC2 (Ubuntu) with Nginx, Let’s Encrypt SSL, DuckDNS domain, HTTPS endpoints.",
        tools: ['Flask', 'Flask-RESTX', 'MongoDB', 'Celery', 'Redis', 'JWT', 'Docker', 'AWS EC2', 'Nginx'],
        role: 'Backend Developer',
        code: 'https://github.com/kuldeepghorpade05/flask-InkCircle-beyond-crud.git',
        demo: '',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },