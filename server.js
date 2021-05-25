const express = require("express");
const config = require("config");

const connectDB = require("./config/db");

const usersRoutes = require("./routes/api/users");

const port = config.get("SERVER_PORT");

// Set Storage Engine
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, x-auth-token"
  );
  next();
});

// Define Routes
app.use("/api/users", usersRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));
