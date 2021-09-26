const express = require("express");
const router = express.Router();

const azureServices = require("../services/azure");


// region GET
router.get("/:id", [], async (req, res) => {
    
    azureServices.
});