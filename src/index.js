module.exports = function toReadable (number) {
  let units = number % 10;
  let tens = (number - units) % 100 / 10;
  let hundreds = (number - tens * 10 - units) / 100;
  let arrUnits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let arrTeen = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let arrTens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let arrHundreds = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
  
  if (number === 0) {
    return 'zero';
  }
  if (number > 0 && number < 10) {
    return arrUnits[units];
  }
  if (number === 10) {
    return 'ten';
  }
  if (number > 10 && number < 20) {
    return arrTeen[units];
  }
  if (number.toString().length == 2 && number >= 20 && units != 0) {
    return arrTens[tens] + ' ' + arrUnits[units];
  }
  if (number.toString().length == 2 && number >= 20 && units === 0) {
    return arrTens[tens];
  }
  if (number.toString().length == 3 && tens === 1 && units > 0) {
    return arrHundreds[hundreds] + ' ' + arrTeen[units];
  }
  if (number.toString().length == 3 && tens === 1 && units === 0) {
    return arrHundreds[hundreds] + ' ten';
  }
  if (number.toString().length == 3 && tens > 1 && units === 0) {
    return arrHundreds[hundreds] + ' ' + arrTens[tens];
  }
  if (number.toString().length == 3 && tens === 0 && units === 0) {
    return arrHundreds[hundreds];
  }
  if (number.toString().length == 3 && tens < 1) {
    return arrHundreds[hundreds] + ' ' + arrUnits[units];
  }
  if (number.toString().length == 3 && tens > 1) {
    return arrHundreds[hundreds] + ' ' + arrTens[tens] + ' ' + arrUnits[units];
  }
}