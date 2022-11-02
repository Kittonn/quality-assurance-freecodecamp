/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

"use strict";
const Book = require("../model/book.model");

module.exports = function (app) {
  app
    .route("/api/books")
    .get(async (req, res) => {
      try {
        const books = await Book.find();
        return res.status(200).json(books);
      } catch (error) {
        console.log(error);
      }
      //response will be array of book objects
      //json res format: [{"_id": bookid, "title": book_title, "commentcount": num_of_comments },...]
    })

    .post(async (req, res) => {
      try {
        const { title } = req.body;
        if (!title) {
          return res.status(200).send("missing required field title");
        }

        const new_book = await Book.create({ title });
        return res.status(201).json({
          _id: new_book._id,
          title: new_book.title,
        });
      } catch (error) {
        console.log(error);
      }

      //response will contain new book object including atleast _id and title
    })

    .delete(async (req, res) => {
      try {
        const books = await Book.deleteMany({});
        return res.status(200).send("complete delete successful");
      } catch (error) {
        console.log(error);
      }
    });

  app
    .route("/api/books/:id")
    .get(async (req, res) => {
      try {
        let { id } = req.params;
        const book = await Book.findOne({ _id: id });
        if (!book) {
          return res.status(200).send("no book exists");
        }
        return res.status(200).json(book);
      } catch (error) {
        console.log(error);
      }
      //json res format: {"_id": bookid, "title": book_title, "comments": [comment,comment,...]}
    })

    .post(async (req, res) => {
      try {
        let { id } = req.params;
        let { comment } = req.body;
        let book = await Book.findOneAndUpdate(
          { _id: id },
          { $push: { comments: comment } },{
            new: true
          }
        );
        if (!book) {
          return res.status(200).send("no book exists");
        }
        if (!comment) {
          return res.status(200).send("missing required field comment");
        }
        // const updateBook = await Book.findOne({ _id: id });
        return res.status(200).json(book);
      } catch (error) {
        console.log(error);
      }
      //json res format same as .get
    })

    .delete(async (req, res) => {
      try {
        let { id } = req.params;
        const book = await Book.findOneAndDelete({ _id: id });
        if (!book) {
          return res.status(200).send("no book exists");
        }
        return res.status(200).send("delete successful");
      } catch (error) {
        console.log(error);
      }
      //if successful response will be 'delete successful'
    });
};
