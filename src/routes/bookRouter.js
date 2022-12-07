import express from 'express';
import BookControllers from "../controllers/bookControllers";

let route = express();
route.get("/", (req, res) => res.json({message: "Welcome to our Bookstore!"}))

route.route("/books")
    .get(BookControllers.getBooks)
    .post(BookControllers.postBook);
route.route("/books/:id")
    .get(BookControllers.getBook)
    .delete(BookControllers.deleteBook)
    .put(BookControllers.updateBook);

export default route;