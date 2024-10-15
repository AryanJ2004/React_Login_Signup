# React_Login_Signup Project
## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Frontend Setup](#frontend-setup)
- [Backend Setup](#backend-setup)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)

Check Live Project At [Link](https://reactloginsignup.vercel.app/dashboard)
## Features
- User Authentication (Sign Up, Login)
- Dashboard for logged-in users
- Mobile-friendly and responsive design

## Technologies Used
- **Frontend**: React, Axios, TailwindCSS
- **Backend**: Node.js, Express, JWT for authentication, MongoDB with Mongoose
- **Database**: MongoDB (Hosted on MongoDB Atlas)
- **Deployment**: Render (for backend), Vercel/Netlify (for frontend)

## Getting Started

### Prerequisites
Make sure you have the following installed:
- **Node.js**: `>=14.x`
- **npm**: `>=6.x`
- **MongoDB Atlas**: For cloud database storage

### Clone the Repository
```bash
git clone https://github.com/your-username/React_Login_Signup.git
cd React_Login_Signup
cd backend
npm install
Configure environment variables: Create a .env file in the backend folder with the following contents:
PORT=5000
MONGODB_URI=<Your MongoDB URI>
JWT_SECRET=<Your JWT Secret>
npm start
```

## Frontend Setup
Navigate to the frontend directory:

bash
cd frontend
Install dependencies:
bash
npm install
Configure environment variables: Create a .env file in the frontend folder with the following contents:

bash
REACT_APP_API_URL=http://localhost:5000/api
Run the frontend app:

bash
npm start
The frontend will run on http://localhost:3000.

## Deployment
## Backend Deployment (Render)
Create a Render account and set up a new Web Service.
Connect your GitHub repository and select the backend folder for deployment.
Set environment variables in Render for the MongoDB URI and JWT secret.
Use the following commands:
Build Command: npm install
Start Command: npm start
Frontend Deployment (Vercel or Netlify)
Create a Vercel/Netlify account and connect your GitHub repository.
Set the base directory to frontend during setup.
Set environment variables for the API URL.
Deploy the project with default build settings (npm run build for React).
## Environment Variables
The following environment variables are required for the project:

## Backend Setup
bash
PORT=5000
MONGODB_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
Frontend (frontend/.env)
bash
REACT_APP_API_URL=http://localhost:5000/api   # Or your deployed backend URL

