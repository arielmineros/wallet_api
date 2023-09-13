const { Router } = require("express");
const authRequired = require("../middlewares/validateTOken");

const router = Router();
router.get("/products", authRequired, (req, res) => {
    res.send("products");
});

module.exports = router;
