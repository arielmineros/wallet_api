const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            //required: [true, "Please enter an username"],
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            //required: [true, "Please enter an email"],
            trim: true,
        },
        password: {
            type: String,
            //required: [true, "Please enter a password"],
        },
    },
    {
        timestamps: true,
    }
);
const User = mongoose.model("User", userSchema);
module.exports = User;
