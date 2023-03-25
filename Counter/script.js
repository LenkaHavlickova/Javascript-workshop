let counter = 0;

$('.increase').click(() => {counter++});
$('.increase').click(() => {$('p').text(counter)});
$('.decrease').click(() => {counter--});
$('.decrease').click(() => {$('p').text(counter)});



