const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors")

const app = express();

app.use(express.json());
app.use(cookieParser());
app.set("trust proxy", 1)
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://bank-transaction-system-nu.vercel.app"
    ],
    credentials: true
}))

const authRoutes = require("./routes/auth.routes");
app.use("/api/auth", authRoutes);


module.exports = app;