const units = ["gal", "L", "mi", "km", "lbs", "kg"];

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
    let result;
    console.log(unit);
    return result;
  };

  this.getReturnUnit = function (initUnit) {
    let result;

    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    return result;
  };
}

module.exports = ConvertHandler;
