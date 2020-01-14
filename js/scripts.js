$(document).ready(function(){

  var cardData = [
    ['term1', 'def1'],
    ['term2', 'def2'],
    ['term3', 'def3']
  ]

  $('.card').click(function(){
    $('.side-1').slideToggle();
    $('.side-2').slideToggle();
  });

  
  $('#new-card').click(function(){
    var card = cardData[random(cardData.length -1)];
    console.log(card);

    $('#term').text(card[0]);
    $('#deffinition').text(card[1]);
    $('.side-1').show();
    $('.side-2').hide();



    console.log(random(10));

  });

});

var random = function(number) {
  return Math.floor(Math.random() * number);
}