const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/", [], async (req, res) => {

    console.log(req);
    const token = jwt.sign(
        {email: req.body.email, name: user.name, email, orgId: user.organizationId},
        "jwtPrivateKey"
    );
    res.send(token);
});

module.exports = router;
