# 🚀 Project Management Tool (MERN Stack)

A full-stack project management application with authentication, project tracking, and task management.

---

## 🔥 Features

### 🔐 Authentication

* JWT-based login & register
* Password hashing using bcrypt

### 📁 Projects

* Create, view projects
* Status: Active / Completed
* User-specific projects

### 📋 Tasks

* Add tasks to projects
* Status: Todo / In Progress / Done
* Filter tasks by status

### 🌱 Seed Data

* Preloaded test user:

  * Email: [test@example.com]
  * Password: Test@123
* Includes sample projects & tasks

---

## 🛠️ Tech Stack

### Frontend

* React.js + TypeScript
* Tailwind CSS

### Backend

* Node.js + Express.js
* MongoDB (Atlas)

---

## ⚙️ Setup Instructions

### 🔹 Backend

```bash
cd backend
npm install
npm run dev
```

### 🔹 Frontend

```bash
cd frontend
npm install
npm start
```

---

## 🌱 Seed Data

```bash
npm run seed
```

---

## 🔐 Environment Variables

Create `.env` in backend:

```env
PORT=5000
MONGO_URI=mongodb+srv://ansh:Ansh123@cluster0.iovru5u.mongodb.net/?appName=Cluster0
JWT_SECRET=supersecretkey
```

---

## 🚀 Live Demo

Frontend:
Backend:

---

## 📌 Future Improvements

* Create tasks & projects
* Drag & drop Kanban board
* Notifications
* Role-based access

---

## 👨‍💻 Author

Ansh Agarwal
