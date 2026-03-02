# User JWT Auth App

A full-stack web application built with a modern decoupled architecture.

## Tech Stack
* **Frontend**: React (Vite), React Router, Context API, Vanilla CSS (Custom Design System).
* **Backend**: Node.js, Express.js.
* **Database**: MySQL.
* **Authentication**: JSON Web Tokens (JWT) + Bcrypt password hashing.

---

## 🚀 Getting Started

### 1. Database Setup (MySQL)
Make sure you have MySQL installed and running on your system.
Create a new database for this project:
```sql
CREATE DATABASE jwt_auth_app;
```

### 2. Backend Setup
Navigate to the server directory and configure your environment variables:
```bash
cd server
```

Open `server/.env` and update your MySQL connection details (specifically the `DB_PASSWORD`):
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password_here
DB_NAME=jwt_auth_app
JWT_SECRET=supersecret12345
```

Start the backend server (it will automatically create the required `users` table):
```bash
npm run dev
# OR: npx nodemon server.js
```

### 3. Frontend Setup
In a new terminal window, navigate to the client directory:
```bash
cd client
```

Start the React development server:
```bash
npm run dev
```

Visit the frontend at **http://localhost:5173/**.

---

## Features Implemented
* **Secure Authentication Flow**: Fully functional Login and Registration using hashed passwords and JWTs.
* **Protected Routes**: React Router wrapper that safely handles redirecting unauthenticated users to the login screen.
* **Global Auth Context**: Manages instantaneous UI updates upon login/logout.
* **Dynamic Aesthetics**: Includes an elegant, premium CSS layout with hover effects, custom typography, animations, and beautiful responsive cards for the Dashboard.
* **REST API**: Structured properly using Controllers, Models (via MySQL queries directly), and Route files.
