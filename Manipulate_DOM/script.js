let names = [ 'Lenka', 'Katka', 'Jan', 'Nikola']

names.forEach( (name) => { if (name === 'Lenka') {$('ul').append(`<li><strong> ${name} </strong> </>`)} else {$('ul').append(`<li> ${name} </>`)}});

let additionalBlock = {
  title: "Added with javascript",
  text: "This block was added using JavaScript's jQuery library. How awesome!"
};

$('body').append(`<h2> ${additionalBlock['title']} </h2>`);
$('body').append(`<p> ${additionalBlock['text']} </p>`);