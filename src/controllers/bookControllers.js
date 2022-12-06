import  Book  from '../database/models/book'

export default class BookControllers{

 static async postBook(req, res) {
        //Creates a new book
        var newBook = new Book(req.body);
        //Save it into the DB.
        newBook.save((err,book) => {
            if(err) {
                res.send(err);
            }
            else { //If no errors, send it back to the client
                res.status(201).json({message: "Book successfully added!", book });
            }
        });
    }

    static async getBooks(req, res) {
        //Query the DB and if no errors, send all the books
        let query = Book.find({});
        query.exec((err, books) => {
            if(err) res.send(err);
            //If no errors, send them back to the client
            res.json(books);
        });
    }

    static async getBook(req, res) {
        Book.findById(req.params.id, (err, book) => {
            if(err) res.send(err);
            //If no errors, send it back to the client
            res.json(book);
        });        
    }

    static async deleteBook(req, res) {
        Book.deleteOne({_id : req.params.id}, (err, result) => {
            res.json({ message: "Book successfully deleted!", result });
        });
    }

    static async updateBook(req, res) {
        Book.findById({_id: req.params.id}, (err, book) => {
            if(err) res.send(err);
            Object.assign(book, req.body).save((err, book) => {
                if(err) res.send(err);
                res.json({ message: 'Book updated!', book });
            });    
        });
    }

}