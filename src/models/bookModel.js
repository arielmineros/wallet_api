const mongoose = require("mongoose");
const User = require("./userModel");

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please enter a book title"],
            trim: true,
        },
        topic: {
            type: String,
            required: [true, "Please enter a topic"],
            trim: true,
        },
        edition: {
            type: String,
            required: [true, "Please enter edition information"],
            trim: true,
        },
        isbn: {
            type: String,
            required: [true, "Please enter edition information"],
            trim: true,
        },
        publishingDetails: {
            type: String,
            required: [true, "Please enter the publishing details"],
            trim: true,
        },
        serieDetails: {
            type: String,
            required: [true, "Please enter the serie details"],
            trim: true,
        },
        author: {
            type: String,
            required: [true, "Please enter the author's name"],
            trim: true,
        },
        description: {
            type: String,
            required: [true, "Please enter a description"],
            trim: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: User,
            required: true,
        },
    },
    { timestamps: true }
);
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
