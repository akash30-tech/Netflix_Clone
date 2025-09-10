
# Netflix Clone

A full-stack Netflix Clone built with React (Frontend) and Node.js/Express/MongoDB (Backend).

---

## Project Structure

```
Netflix_Clone/
  Backend/      # Node.js/Express API
  Frontend/     # React app
```

---

## Features

- User authentication (Firebase)
- Browse movies/TV shows (TMDB API)
- Add/remove movies to favorites
- Responsive UI
- Video player

---

## Backend Setup (Node.js/Express)

1. **Navigate to Backend folder:**
	```sh
	cd Backend
	```
2. **Install dependencies:**
	```sh
	npm install
	```
3. **Configure Environment Variables:**
	  MONGO_URI=your_mongodb_connection_string
	  JWT_SECRET=your_jwt_secret
	  PORT=5000
	  ```
	- Or update the connection string directly in `server.js`.
4. **Start the backend server:**
	```sh
	npm start
	```
	The backend runs on `http://localhost:5000` (or your specified port).

---

## Frontend Setup (React)

1. **Navigate to Frontend folder:**
	```sh
	cd Frontend
	```
2. **Install dependencies:**
	```sh
	npm install
	```
3. **Configure API and Firebase:**
	- TMDB API key and base URL are in `src/utils/constants.js`.
	- Firebase config is in `src/utils/firebase-config.js`.
	- Update these files if you use your own keys/services.
4. **Start the frontend app:**
	```sh
	npm start
	```
	The frontend runs on `http://localhost:3000` by default.

---

## Build & Deploy

1. **Frontend:**
	```sh
	npm run build
	```
	- Deploy the `build` folder to Vercel, Netlify, or your server.

2. **Backend:**
	- Deploy to Render, Railway, Heroku, or your own VPS.
	- Set environment variables on your host.

3. **Connect Frontend to Backend:**
	- Update the API endpoint in the frontend to point to your deployed backend.

---

## Screenshots

Add screenshots here (optional)

---

## License

MIT
