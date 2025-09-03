🛒 ShoppyGlobe - Full Stack E-Commerce Application
📋 Overview
ShoppyGlobe is a modern full-stack e-commerce platform built with React.js frontend and Node.js backend. The application features user authentication, product browsing, shopping cart functionality, and a responsive design.

✨ Features
User Authentication - Secure login/logout system

Shopping Cart - Full cart management functionality

Product Browsing - Browse and search products

Responsive Design - Optimized for desktop and mobile devices

Modern UI - Clean and intuitive user interface

🛠️ Tech Stack
Frontend: React.js, Redux, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JWT

Deployment: Netlify (Frontend), Render (Backend)

🚀 Live Demo
Frontend: https://shoppyglobe9.netlify.app/

Backend API: Deployed on Render

Source Code: https://github.com/Ushnika09/ShoppyGlobe-Full-Stack-.git

🚀 Installation & Setup (Windows)
Prerequisites
Node.js (v14 or higher) - Download here

Git for Windows - Download here

Code Editor (VS Code recommended)

1. Clone the Repository
bash
git clone https://github.com/Ushnika09/ShoppyGlobe-Full-Stack-.git
cd ShoppyGlobe-Full-Stack-
2. Backend Setup
bash
# Navigate to backend directory
cd shoppyglobe-backend

# Install dependencies
npm install

# Create environment file using Command Prompt
echo MONGO_URI=mongodb+srv://karushnika_db_user:FADkIOc3I8eFFHZS@cluster0.f0k9ni1.mongodb.net/> .env
echo PORT=5000>> .env
echo JWT_SECRET=ShobbyGlobe09>> .env
echo NODE_ENV=development>> .env

# Start the backend server
npm run dev
Backend will run on http://localhost:5000

3. Frontend Setup (New Command Prompt/Terminal)
bash
# Navigate to frontend directory
cd shoppyglobe-frontend

# Install dependencies
npm install

# Start the frontend development server
npm start
Frontend will run on http://localhost:3000

📁 Project Structure
ShoppyGlobe-Full-Stack-/
├── shoppyglobe-backend/
├── shoppyglobe-frontend/
└── README.md

🔧 Environment Variables
Backend (.env)
env
MONGO_URI=mongodb+srv://karushnika_db_user:FADkIOc3I8eFFHZS@cluster0.f0k9ni1.mongodb.net/
PORT=5000
JWT_SECRET=ShobbyGlobe09

🌐 Deployment
The application is deployed on:

Frontend: Netlify - https://shoppyglobe9.netlify.app/
Backend: Render
Database: MongoDB Atlas

📝 License
This project is licensed under the MIT License.

👥 Authors
Ushnika - GitHub Profile
