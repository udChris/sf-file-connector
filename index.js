const express = require("express");
const azureService = require("./services/azure");

const azure = require("./routes/azure");

const app = express();
const helmet = require("helmet");
const compression = require("compression");

app.use(express.static("public"));
app.use(express.json());
app.use(helmet());
app.use(compression());

app.use("/api/azure", azure);

const config = require("config");
const port = process.env.PORT || config.get("port");
app.listen(port, function () {
    console.log(`Server started on port ${port}...`);
});