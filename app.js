const express = require("express");
const {
  getCategories,
  getReviewById,
} = require("./controllers/app.controller");
const {
  handleNotAnEndpoint,
  handlePSQLError,
  handleCustomError,
  handleInternalServerError,
} = require("./controllers/error.controller");

const app = express();

app.get("/api/categories", getCategories);

app.get("/api/reviews/:review_id", getReviewById);

app.all("*", handleNotAnEndpoint);

app.use(handlePSQLError);

app.use(handleCustomError);

app.use(handleInternalServerError);

module.exports = app;
