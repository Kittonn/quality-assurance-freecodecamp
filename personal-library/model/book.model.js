const { model, Schema } = require("mongoose");

const bookSchema = new Schema({
  title: { type: String },
  commentcount: { type: Number, default: 0 },
  comments: [{ type: String }],
});

module.exports = model("book", bookSchema);
