$(document).ready(function() {
  $('#userInput').submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($('#arabNumeral').val());
    console.log(userNumber);

    var baseTenValues = [];
    var thousands = parseInt((userNumber/(1000)));
    var hundreds = parseInt((userNumber - (thousands * 1000))/(100));
    var tens = parseInt((userNumber - (thousands * 1000) - (hundreds * 100)) /(10));
    var singles = parseInt((userNumber - (thousands * 1000) - (hundreds * 100) - (tens * 10))/(1));
    baseTenValues.push(singles);
    baseTenValues.push(tens);
    baseTenValues.push(hundreds);
    baseTenValues.push(thousands);

    var zeroSpecial = ["IX", "IV"];
    var oneSpecial = ["XC", "XL"];
    var twoSpecial = ["CM", "CD"];
    var threeSpecial = ["MMMMMMMMM" , "MMMM"];

    var specialNumbers = [];
    specialNumbers.push(zeroSpecial);
    specialNumbers.push(oneSpecial);
    specialNumbers.push(twoSpecial);
    specialNumbers.push(threeSpecial);

    // REGEX: ^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$
    for (var baseIndex = 0; baseIndex < baseTenValues.length; baseIndex++) {
      if (baseTenValues[baseIndex] === 9) {
        var specialChunk = specialNumbers[baseIndex][0];
        console.log(specialChunk);

      }
      else if (baseTenValues[baseIndex] === 4) {
        var specialChunk = specialNumbers[baseIndex][1];
        console.log(specialChunk);
      }
      else {
        // console.log("do the thing zhu-li");

      }
    }

    console.log(baseTenValues);
  });
});
