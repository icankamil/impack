/**
 * @file Bootstrap express.js server
 * @author Muhammad Insan Kamil
 */

const express = require("express");
const morgan = require("morgan");
const router = require("../config/routes");
const cors = require("cors");

const app = express();

/** Install request logger */
app.use(morgan("dev"));
app.use(cors());
/** Install JSON request parser */
app.use(express.json());

/** Install Router */
app.use(router);

module.exports = app;
