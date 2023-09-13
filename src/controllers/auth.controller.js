//import User from "../models/userModel";
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const createAccessToken = require("../libs/jsonwebtoken");
//import createAccessToken from "../libs/jsonwebtoken";
//const jsonwebtoken = require("jsonwebtoken");

const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: passwordHash,
        });
        const userSaved = await newUser.save();
        const token = await createAccessToken({ id: userSaved.id });
        res.cookie("token", token);
        //res.json({ message: "User created successfully" });
        res.status(200).json({
            id: userSaved.id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt,
            message: "User created successfully",
        });
        console.log(token);
        //console.log(userSaved);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    //res.send("registrando...");
};
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userFound = await User.findOne({ email });
        if (!userFound) {
            return res.status(400).json({ message: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credential" });
        }
        //const newUser = new User({
        //username,
        //email,
        //password: passwordHash,
        //});
        //const userSaved = await newUser.save();
        const token = await createAccessToken({ id: userFound.id });
        res.cookie("token", token);
        //res.json({ message: "User created successfully" });
        res.status(200).json({
            id: userFound.id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt,
            message: "User created successfully",
        });
        console.log(token);
        //console.log(userSaved);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    //res.send("registrando...");
};
const logout = (req, res) => {
    res.cookie("token", "", { expires: new Date(0) });
    return res.sendStatus(200);
};

const profile = async (req, res) => {
    console.log(req.user);
    const userFound = await User.findById(req.user.id);
    console.log(userFound);
    //if (!userFound) {
    //return res.status(400).json({ message: "User not found" });
    //}
    return res.json({
        id: userFound.id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt,
    });
};

module.exports = { register, login, logout, profile };
