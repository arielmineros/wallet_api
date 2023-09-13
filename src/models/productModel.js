const mongoose = require("mongoose");
const { Decimal128 } = require("mongodb");
const User = require("./userModel");
const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a product name"],
            trim: true,
        },
        price: {
            type: Decimal128,
            required: [true, "Please enter a price"],
            trim: true,
        },
        description: {
            type: String,
            required: [true, "Please enter a description"],
            trim: true,
        },
        image: {
            type: String,
            required: [true, "Please enter an image"],
            trim: true,
        },
        quantity: {
            type: Number,
            required: [true, "Please enter the quantity"],
            trim: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: User,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
