"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();
  app.get("/api/convert", (req, res) => {
    let { input } = req.query;
    const num = convertHandler.getNum(input);
    const unit = convertHandler.getUnit(input);
    if (num === "invalid number" && unit !== "invalid unit") {
      return res.status(200).send(num);
    }
    if (num !== "invalid number" && unit === "invalid unit") {
      return res.status(200).send(unit);
    }
    if (num === "invalid number" && unit === "invalid unit") {
      return res.status(200).send("invalid number and unit");
    }
    let returnUnit = convertHandler.getReturnUnit(unit);
    let convert = convertHandler.convert(num, unit);
    return res.status(200).json({
      initNum: num,
      initUnit: unit,
      returnNum: parseFloat(convert.toFixed(5)),
      returnUnit,
      string: convertHandler.getString(num, unit, convert, returnUnit),
    });
  });
};
