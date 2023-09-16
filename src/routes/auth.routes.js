//import { Router } from "express";
const { Router } = require("express");
//import { login, register } from "../controllers/auth.controller.js";
const {
    register,
    login,
    logout,
    profile,
    verify,
} = require("../controllers/auth.controller");
const authRequired = require("../middlewares/validateTOken");

const router = Router();
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/profile", authRequired, profile);
router.get("/verify", verify);

module.exports = router;
