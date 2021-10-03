const express = require("express");
const azureService = require("./services/azure");

const azure = require("./routes/azure");
const fileRoutes = require("./routes/fileRoutes");

const app = express();
const helmet = require("helmet");
const compression = require("compression");


app.use(express.static("public"));
app.use(express.json());
app.use(helmet());
app.use(compression());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*'); // will be
    // res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Methods", 'POST,GET,PUT,DELETE');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept');
    next();
})

app.use("/api/azure", azure);
app.use("/api/v1/files", fileRoutes);


//region SERVER
const config = require("config");
const port = process.env.PORT || config.get("port");
app.listen(port, function () {
    console.log(`Server started on port ${port}...`);
});
//endregion