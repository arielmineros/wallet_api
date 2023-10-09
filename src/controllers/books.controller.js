//import Book from "../models/bookModel";
const Book = require("../models/bookModel");

const getBooks = async (req, res) => {
    const books = await Book.find().populate("user");
    res.json(books);
};
const getUserBooks = async (req, res) => {
    const books = await Book.find({ user: req.user.id }).populate("user");
    res.json(books);
};
const createBook = async (req, res) => {
    const {
        title,
        topic,
        edition,
        isbn,
        publishingDetails,
        serieDetails,
        author,
        description,
    } = req.body;
    const newBook = new Book({
        title,
        topic,
        edition,
        isbn,
        publishingDetails,
        serieDetails,
        author,
        description,
        user: req.user.id,
    });
    const savedBook = await newBook.save();
    res.json(savedBook);
};
const getBook = async (req, res) => {
    const book = await Book.findById(req.params.id).populate("user");
    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }
    res.json(book);
};
const deleteBook = async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }
    //res.json(book);
    return res.status(204);
};
const updateBook = async (req, res) => {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }
    res.json(book);
};

module.exports = {
    getBooks,
    getUserBooks,
    createBook,
    getBook,
    deleteBook,
    updateBook,
};
