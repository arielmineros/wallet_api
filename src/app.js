const express = require("express");
const morgan = require("morgan");
const authRoutes = require("./routes/auth.routes");
const cookieParser = require("cookie-parser");
const productsRoutes = require("./routes/products.routes");
const booksRoutes = require("./routes/books.routes");
const cors = require("cors");
//const connectBD = require("./bd");

const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use("/api", authRoutes);
app.use("/api", productsRoutes);
app.use("/api", booksRoutes);

module.exports = app;
