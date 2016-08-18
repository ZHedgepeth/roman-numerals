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

    console.log(baseTenValues);
  });
});
