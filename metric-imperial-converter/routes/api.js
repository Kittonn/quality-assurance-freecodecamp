"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();
  app.get("/api/convert", (req, res) => {
    let { input } = req.query;
    const num = convertHandler.getNum(input);
    const unit = convertHandler.getUnit(input);
    console.log(num);
    return res.status(200).send("Hello, world!");
  });
};
