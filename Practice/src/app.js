// src/app.js
// -------------------------------------------------------------------------------------------------
const express = require("express");

// Import All Routes file Here
// const userRoutes = require("./routes/user.routes");
const personRoutes = require('./Routes/person.routes');
const menuRoutes = require('./Routes/menu.routes');
// const errorHandler = require("./middlewares/error.middleware");

const app = express();

// 1️⃣ Built-in middleware
app.use(express.json()); // For every incoming request, if the body contains JSON, parse it and make it available inside req.body.
// when you want to use registers middleware in Express JS we have to use app.use();

// 2️⃣ Custom routes
// app.use("/api/users", userRoutes);
app.use('/person',personRoutes);
app.use('/menuItem',menuRoutes);
// 3️⃣ Error handling middleware (ALWAYS last)
// app.use(errorHandler);

module.exports = app;