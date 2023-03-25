$('.firstButton').click(() => {console.log('Yeah, you clicked me')});

$('.secondButton').click(() => {
  $('.firstButton').text('You have`clicked on second button')});

// $('.thirdButton').click(() => {$('button').css('background-color', $('input').val())});

$('.thirdButton').one('click', function(){$('button').css('background-color', $('input').val())})
