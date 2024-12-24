const express = require("express");
const path = require("path");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerOptions = require("./api-specs/api-v1.json");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const helloEndpoint = require("./components/hello");
const goodbyeEndpoint = require("./components/goodbye");

app.use("/api/v1/hello", helloEndpoint);
app.use("/api/v1/goodbye", goodbyeEndpoint);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

require("dotenv").config();
const PORT = process.env.PORT || port;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
