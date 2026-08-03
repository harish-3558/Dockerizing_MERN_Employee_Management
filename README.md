# MERN Employee Management App

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6-green)](https://www.mongodb.com/)
[![Docker](https://img.shields.io/badge/Docker-Compose-2496ED)](https://www.docker.com/)

A simple MERN stack application for creating and managing employee records.

## Features

- Add employee details
- Store data in MongoDB
- React frontend with Vite
- Express REST API backend
- Docker Compose for local containerized setup

## Project Structure

```bash
MERN/
├── backend/
│   ├── controller/
│   ├── model/
│   ├── router/
│   ├── index.js
│   ├── package.json
│   ├── Dockerfile
│   └── .env
├── frontend/
│   ├── src/
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── Dockerfile
├── docker-compose.yml
├── README.md
├── .gitignore
└── .dockerignore
```

## Tech Stack

- MongoDB
- Express.js
- React
- Node.js
- Vite
- Docker Compose

## Prerequisites

Make sure these are installed on your machine:

- Node.js 18+
- npm
- Docker Desktop
- Git

## Installation

### 1. Clone the repository

```bash
git clone <https://github.com/harish-3558/Dockerizing_MERN_Employee_Management.git>
cd MERN
```

### 2. Backend setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
MONGO_URI=mongodb://localhost:27017/Mern
```

Start the backend:

```bash
npm start
```

The backend should run at:

```text
http://localhost:5000
```

### 3. Frontend setup

```bash
cd ../frontend
npm install
npm run dev
```

The frontend should run at:

```text
http://localhost:5173
```

## Docker Setup

From the project root:

```bash
cd MERN
docker-compose up --build
```

This project is configured to run:

- Frontend: http://localhost:3000
- Backend: http://localhost:6000
- MongoDB: mongodb://localhost:27017

## API Endpoint

### Add employee

```http
POST /employees/add-employee
```

Example JSON body:

```json
{
  "name": "john",
  "department": "IT"
}
```

## Notes

- The backend uses `nodemon` for automatic restarts.
- The frontend uses Vite for development.
- Docker Compose is useful for running the full stack in one command.


