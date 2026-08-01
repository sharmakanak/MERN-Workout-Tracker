# FitTrack (MERN Stack)

FitTrack is a full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to securely sign up, log in, and track their workouts by logging the exercise title, weight load, and repetitions. 

This project follows a simple, beginner-friendly architecture and utilizes standard React hooks and the Context API for state management, without the need for complex external state libraries like Redux.

## Features

* **User Authentication**: Secure signup and login using JSON Web Tokens (JWT) and password hashing with bcrypt.
* **Workout Management**: Authenticated users can Create, Read, and Delete their own workout logs.
* **Protected Routes**: Backend API endpoints and frontend pages are protected and restricted to authenticated users.
* **Responsive Layout**: A clean, centered UI design utilizing a custom red and white color palette.
* **Validation**: Both frontend and backend validation for ensuring required fields are filled out.
* **Relative Timestamps**: Displays how long ago a workout was created (e.g., "2 days ago") using `date-fns`.

## Tech Stack

**Frontend:**
* React (Vite)
* React Router DOM (Routing)
* Context API (State Management)
* `date-fns` (Date formatting)
* Vanilla CSS

**Backend:**
* Node.js & Express
* MongoDB & Mongoose (Database & ODM)
* JWT (Authentication)
* `bcrypt` (Password Hashing)
* `validator` (Input Validation)

## Project Structure

The repository is split into two main directories:

* `/backend` - Contains the Express server, Mongoose models, controllers, middleware, and routes.
* `/frontend` - Contains the React Vite application, context providers, custom hooks, pages, and components.

## Getting Started

Follow these instructions to run the project locally.

### Prerequisites

* [Node.js](https://nodejs.org/) installed
* A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (or a local MongoDB instance)

### 1. Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Ensure your `.env` file is properly configured with your MongoDB URI, Port, and a Secret for JWT signing:
   ```env
   PORT=4000
   MONGO_URI=your_mongodb_connection_string
   SECRET=your_super_secret_jwt_key
   ```
4. Start the backend development server:
   ```bash
   npm run dev
   ```

### 2. Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```

The frontend will automatically proxy API requests to the backend (configured in `vite.config.js`). You can now view the application in your browser, typically at `http://localhost:5173`.
