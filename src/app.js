const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const app = express();

// init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// init db

// init routes
app.get("/", (req, res, next) => {
    const strCompress = "Hello Tipjs";
    return res.status(500).json({
        message: "Welcome",
        metadata: strCompress.repeat(10000)
    });
});

// handling error

module.exports = app;