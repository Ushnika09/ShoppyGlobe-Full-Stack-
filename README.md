# 🛒 ShoppyGlobe - Full Stack E-Commerce Application

## 📋 Overview
ShoppyGlobe is a modern full-stack e-commerce platform built with React.js frontend and Node.js backend. The application features user authentication, product browsing, shopping cart functionality, and a responsive design.

## ✨ Features
- **User Authentication** - Secure login/logout system  
- **Shopping Cart** - Full cart management functionality  
- **Product Browsing** - Browse and search products  
- **Responsive Design** - Optimized for desktop and mobile devices  
- **Modern UI** - Clean and intuitive user interface  

## 🛠️ Tech Stack
- **Frontend:** React.js, Redux, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT  
- **Deployment:** Netlify (Frontend), Render (Backend)  

## 🚀 Live Demo
- **Frontend:** [https://shoppyglobe9.netlify.app/](https://shoppyglobe9.netlify.app/)  
- **Backend API:** Deployed on Render  
- **Source Code:** [GitHub Repository](https://github.com/Ushnika09/ShoppyGlobe-Full-Stack-.git)  

## 🚀 Installation & Setup (Windows)

### Prerequisites
- Node.js (v14 or higher) - [Download here](https://nodejs.org/)  
- Git for Windows - [Download here](https://git-scm.com/)  
- Code Editor (VS Code recommended)  

### 1. Clone the Repository
```bash
git clone https://github.com/Ushnika09/ShoppyGlobe-Full-Stack-.git
cd ShoppyGlobe-Full-Stack-
```
2. Backend Setup - Navigate and Install Dependencies
```bash
cd shoppyglobe-backend
npm install
```
3. Backend Setup - Create Environment File
```bash
echo MONGO_URI=mongodb+srv://karushnika_db_user:FADkIOc3I8eFFHZS@cluster0.f0k9ni1.mongodb.net/> .env
echo PORT=5000>> .env
echo JWT_SECRET=ShobbyGlobe09>> .env
echo NODE_ENV=development>> .env
```
4. Backend Setup - Start Server
```bash
npm run dev
```
5. Frontend Setup - Navigate and Install Dependencies
```bash
cd shoppyglobe-frontend
npm install
```
6. Frontend Setup - Start Development Server
```bash
npm start
```
## 📁 Project Structure
bash
Copy code
ShoppyGlobe-Full-Stack-/
├── shoppyglobe-backend/
├── shoppyglobe-frontend/
└── README.md

## 🔧 Environment Variables
```bash
MONGO_URI=mongodb+srv://karushnika_db_user:FADkIOc3I8eFFHZS@cluster0.f0k9ni1.mongodb.net/
PORT=5000
JWT_SECRET=ShobbyGlobe09
NODE_ENV=development
```
🌐 Deployment
Frontend: Netlify - https://shoppyglobe9.netlify.app/

Backend: Render

Database: MongoDB Atlas

