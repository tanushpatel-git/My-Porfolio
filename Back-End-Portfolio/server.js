const express = require('express');
const { configDotenv } = require("dotenv");
const cors = require('cors');
const messageSendRoutes = require("./Routes/messageSendRoute");

configDotenv(); // load env first

const app = express();

// Apply CORS middleware
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

// Middleware
app.use(express.json());

// Router-level middleware
app.use('/message', messageSendRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});