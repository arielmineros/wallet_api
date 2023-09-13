//import { TOKEN_SECRET } from "../config";
const TOKEN_SECRET = require("../config");
const jsonwebtoken = require("jsonwebtoken");

const createAccessToken = (payload) => {
    return new Promise((resolve, reject) => {
        jsonwebtoken.sign(
            payload,
            TOKEN_SECRET,
            {
                expiresIn: "1d",
            },
            (error, token) => {
                if (error) reject(error);
                resolve(token);
            }
        );
    });
};

//export default createAccessToken;
module.exports = createAccessToken;
