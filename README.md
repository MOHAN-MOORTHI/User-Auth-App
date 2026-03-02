# User Auth App 🛡️

A modern, secure User Authentication application built with a React frontend and Node.js/Express backend. This project features JWT-based authentication, password hashing with Bcrypt, and a MySQL database.

## ✨ Features

-   **User Registration**: Secure sign-up with password hashing.
-   **JWT Authentication**: Stateless authentication using JSON Web Tokens.
-   **Protected Routes**: Advanced frontend routing to secure the dashboard.
-   **MySQL Database**: Persistent storage for user profiles and credentials.
-   **Modern UI/UX**: Professional design with glassmorphism and micro-animations.
-   **Responsive Design**: Fully functional on mobile, tablet, and desktop.

## 🛠️ Tech Stack

### Frontend
-   **React 19** (Vite)
-   **React Router Dom v7**
-   **Axios** for API requests
-   **Lucide React** for beautiful icons

### Backend
-   **Node.js & Express**
-   **MySQL2** with connection pooling
-   **JSONWebToken (JWT)** for security
-   **Bcrypt.js** for password encryption
-   **Dotenv** for environment management
-   **CORS** enabled for cross-origin requests

## 🚀 Getting Started

### Prerequisites
-   Node.js installed
-   MySQL server running

### 1. Database Setup
Create a database named `jwt_auth_app` in your MySQL server:
```sql
CREATE DATABASE jwt_auth_app;
```

### 2. Configuration
Create a `.env` file in the `server` directory and add your credentials:
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=jwt_auth_app
JWT_SECRET=your_random_secret_here
```

### 3. Installation
Install dependencies for both the server and client:

```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

### 4. Running the App
Start both servers simultaneously:

```bash
# In the server directory
npm run dev

# In the client directory
npm run dev
```

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
