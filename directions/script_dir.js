let color = 'purple';
let number = 10;
let word = 'cool';
let text1 = 'Power of DOM'

if (color === 'purple') { $('.north').css('background-color', color );}

if (number > 100) {$('.east').text("whoah, that's a big number")} else {$('.east').text("just a regular number, please")}

if (word=== 'cool') {$('.south').text(text1)} else {$('.west').text(text1)}

