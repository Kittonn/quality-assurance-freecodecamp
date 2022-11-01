const units = [
  "L",
  "l",
  "gal",
  "GAL",
  "mi",
  "MI",
  "km",
  "KM",
  "lbs",
  "LBS",
  "kg",
  "KG",
];

function ConvertHandler() {
  this.getNum = function (input) {
    let num = input.split(/[a-zA-Z]/).join("");
    if (!num) {
      return 1;
    } else {
      if (/^\d+$/g.test(num)) {
        return parseInt(num);
      } else if (/^\d+\.\d+$/g.test(num)) {
        return parseFloat(num);
      } else if (
        /^(\d+\.\d+\/\d+\.\d+|\d+\/\d+\.\d+|\d+\.\d+\/\d+|\d+\/\d+)$/g.test(num)
      ) {
        split_num = num.split("/");
        div_num = parseFloat(split_num[0]) / parseFloat(split_num[1]);
        return div_num % 10 == 0 ? parseInt(div_num) : parseFloat(div_num);
      } else {
        return "invalid number";
      }
    }
  };

  this.getUnit = function (input) {
    let unit = input.split(/[^a-zA-Z]/).join("");
    if (!units.includes(unit)) {
      return "invalid unit";
    } else {
      if (unit === "l" || unit === "L") {
        unit = unit.toUpperCase();
      } else {
        unit = unit.toLowerCase();
      }
      return unit;
    }
  };

  this.getReturnUnit = function (initUnit) {
    switch (initUnit) {
      case "gal":
        return "L";
        break;
      case "L":
        return "gal";
        break;
      case "mi":
        return "km";
        break;
      case "km":
        return "mi";
        break;
      case "lbs":
        return "kg";
        break;
      case "kg":
        return "lbs";
        break;
    }
  };

  this.spellOutUnit = function (unit) {
    switch (unit) {
      case "L":
        return "liters";
        break;
      case "gal":
        return "gallons";
        break;
      case "mi":
        return "miles";
        break;
      case "km":
        return "kilometers";
        break;
      case "lbs":
        return "pounds";
        break;
      case "kg":
        return "kilograms";
        break;
    }
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    switch (initUnit) {
      case "gal":
        return initNum * galToL;
        break;
      case "L":
        return initNum / galToL;
        break;
      case "lbs":
        return initNum * lbsToKg;
        break;
      case "kg":
        return initNum / lbsToKg;
        break;
      case "mi":
        return initNum * miToKm;
        break;
      case "km":
        return initNum / miToKm;
        break;
    }
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(
      initUnit
    )} converts to ${returnNum.toFixed(5)} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
