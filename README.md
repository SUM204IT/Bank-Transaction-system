# Bankify 🏦

Bankify is a full-stack banking application built using the **MERN stack**. It provides users with a secure platform to manage accounts and perform financial transactions through a clean and responsive interface.

## 🚀 Features

* 🔐 Secure user authentication
* 👤 User account management
* 💸 Transaction processing
* 📊 Transaction history
* 🧾 Double-entry ledger system for accurate financial records
* 🔗 RESTful APIs
* 📱 Responsive user interface

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* HTML
* CSS

### Backend

* Node.js
* Express.js
* REST APIs

### Database

* MongoDB

## 🏗️ Architecture

Bankify follows a client-server architecture:

```text
React.js Frontend
       ↓
REST APIs
       ↓
Node.js + Express.js
       ↓
MongoDB
```

The application uses a **double-entry ledger approach** to maintain consistent and auditable transaction records.

## 📂 Project Structure

```text
Bankify/
├── client/          # React frontend
├── server/          # Node.js & Express backend
├── README.md
└── package.json
```

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/bankify.git
cd bankify
```

### 2. Install dependencies

For the backend:

```bash
cd server
npm install
```

For the frontend:

```bash
cd ../client
npm install
```

### 3. Environment Variables

Create a `.env` file in the backend directory and add the required environment variables:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4. Run the application

Start the backend:

```bash
npm run dev
```

Start the frontend:

```bash
npm start
```

## 🔒 Security

The application includes authentication and protected API routes to ensure that users can securely access their accounts and perform authorized operations.

## 📸 Screenshots

Add screenshots of your application here:

```text
![Bankify Dashboard](./screenshots/dashboard.png)
```

## 🔮 Future Improvements

* Online paymen
