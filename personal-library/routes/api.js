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
      const books = await Book.find();
      return res.status(200).json(books);
      //response will be array of book objects
      //json res format: [{"_id": bookid, "title": book_title, "commentcount": num_of_comments },...]
    })

    .post(async (req, res) => {
      try {
        const { title } = req.body;
        if (!title) {
          return res.status(404).send("missing required field title");
        }
        const book = await Book.findOne({ title });
        if (book) {
          return res.status(400).json({ message: "book already exists" });
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

    .delete(function (req, res) {
      //if successful response will be 'complete delete successful'
    });

  app
    .route("/api/books/:id")
    .get(function (req, res) {
      let bookid = req.params.id;
      //json res format: {"_id": bookid, "title": book_title, "comments": [comment,comment,...]}
    })

    .post(function (req, res) {
      let bookid = req.params.id;
      let comment = req.body.comment;
      //json res format same as .get
    })

    .delete(function (req, res) {
      let bookid = req.params.id;
      //if successful response will be 'delete successful'
    });
};
