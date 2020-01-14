$(document).ready(function(){

  var cardData = [
    ['JavaScript', 'an object-oriented computer programming language commonly used to create interactive effects within web browsers.'],
    ['Operators', ' a symbol that is used to perform an operation. Most often these operations are arithmetic (addition, subtraction, etc), but not always.'],
    ['Variables', 'hold the data value and it can be changed anytime.'],
    ['Variable naming conventions', 'A global JavaScript variable is written in camelCase if it is mutable. A global JavaScript variable is written in UPPERCASE if it is immutable.'],
    ['Functions', 'a set of statements that performs a task or calculates a value. '],
    ['Methods', 'are actions that can be performed on objects. A JavaScript method is a property containing a function definition.'],
    ['Arguments', 'is an Array -like object accessible inside functions that contains the values of the arguments passed to that function.'],
    ['Parameters', 'are variables listed as a part of the function definition. '],
    ['Return', 'cease execution in a function and return a value to the caller.'],
    ['Chaining methods', 'refers to repeatedly calling one method after another on an object, in one continuous line of code.'],
    ['Strings', 'a sequence of one or more characters that may consist of letters, numbers, or symbols.'],
    ['Booleans', 'a datatype that returns either of two values i.e. true or false.'],
  ]

  $('.card').click(function(){
    $('.side-1').slideToggle();
    $('.side-2').slideToggle();
  });


  $('#new-card').click(function(){
    newCard();

  });


  var newCard = function() {
    var card = cardData[random(cardData.length -1)];
    $('#term').text(card[0]);
    $('#deffinition').text(card[1]);
    $('.side-1').show();
    $('.side-2').hide();
  }

});

var random = function(number) {
  return Math.floor(Math.random() * number);
}