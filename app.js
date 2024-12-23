const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerOptions = require("./api-specs/api-v1.json");

const app = express();
app.use(express.json());

const helloEndpoint = require("./components/hello");
const goodbyeEndpoint = require("./components/goodbye");

app.use("/api/v1/hello", helloEndpoint);
app.use("/api/v1/goodbye", goodbyeEndpoint);

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

require("dotenv").config();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
