# Portfolio Website - Full Stack React + Node.js

A modern, responsive, and full-featured personal portfolio website built using React (frontend), Node.js (backend), and MongoDB (database). This portfolio showcases skills, projects, and blog posts, and includes a contact form with Formspree integration. Hosted using Render on the free tier.

## Features

- 🧑 About Me Section
- 🧠 Dynamic Skills Carousel + Modal
- 💼 Project Section with DevOps & Software Projects
- 📚 Blog Section with Full-Post View
- 📩 Contact Form with Formspree
- 🌐 Fully Responsive Design
- 🧾 Admin Backend (Node.js) to manage Projects & Blog Posts

---

## Tech Stack

**Frontend:**
- React (Vite)
- React Router
- CSS 

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS, Body Parser

**Hosting:**
- Render (Free Tier)

---

## Folder Structure

```
portfolio-project/
├── client/                  # Frontend (React)
│   ├── public/
│   ├── src/
│   │   ├── assets/         # Images
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page-level components
│   │   ├── sections/       # Homepage sections
│   │   ├── data/           # Skills
│   │   └── App.jsx
│   ├── .env
│   └── vite.config.js
│
├── server/                 # Backend (Node.js/Express)
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── index.js            # Main server file
│   └── .env
```

---

## Environment Variables

### `client/.env`
```
VITE_API_URL=https://portolio-api-wsal.onrender.com
```

### `server/.env`
```
PORT=5005

# The secret will be used for the session
SESSIONSECRET=your-secret-key

DBUSER=your-mongodb-user
DBPWD=your-mongodb-password
DBHOST=your-mongodb-host
DBNAME=your-database-name

# Salt for password hashing (should be at least 16 bytes long)
SALT=your-salt-key
```

---

## Deployment

View full deployment guide [here](https://medium.com/@awavieve/deploying-a-full-stack-react-node-js-app-to-render-free-tier-e1eb6fce055a).

---

## Installation (Local Development)

1. **Clone the repository**
```bash
git clone https://github.com/awsactivators/portfolio-app.git
cd portfolio-app
```

2. **Install backend dependencies**
```bash
cd server
npm install
```

3. **Install frontend dependencies**
```bash
cd ../client
npm install
```

4. **Run both servers**
```bash
# Terminal 1
cd server
npm run dev

# Terminal 2
cd client
npm run dev
```

Access the app at `http://localhost:5173`

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

## Author

**Genevieve Awa**  
DevOps & Full Stack Developer  
[GitHub](https://github.com/awsactivators) | [LinkedIn](https://linkedin.com/in/vieve-awa) | [Medium](https://medium.com/@awavieve)

---

