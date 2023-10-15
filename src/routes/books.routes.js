const { Router } = require("express");
const authRequired = require("../middlewares/validateTOken");
const {
    getBook,
    getUserBooks,
    createBook,
    getBooks,
    deleteBook,
    updateBook,
} = require("../controllers/books.controller");
const routerBooks = Router();

routerBooks.get("/books", authRequired, getBooks);
routerBooks.get("/books-user", authRequired, getUserBooks);
routerBooks.post("/books", authRequired, createBook);
routerBooks.delete("/books/:id", authRequired, deleteBook);
routerBooks.get("/books-user/:id", authRequired, getBook);
routerBooks.put("/books-user/:id", authRequired, updateBook);

module.exports = routerBooks;
