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
    try {
        const {
            title,
            topic,
            edition,
            isbn,
            publishingDetails,
            serieDetails,
            author,
            imageUrl,
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
            imageUrl,
            user: req.user.id,
        });
        const savedBook = await newBook.save();
        res.json(savedBook);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
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
    try {
        const bookUpdated = await Book.findOneAndUpdate({_id: req.params.id}, req.body, {
            new: true,
        });
        res.json(bookUpdated);
    } catch (error) {
        return res.status(404).json({message:"Book not found"})
    }
};

module.exports = {
    getBooks,
    getUserBooks,
    createBook,
    getBook,
    deleteBook,
    updateBook,
};
