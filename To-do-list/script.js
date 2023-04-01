$('.addButton').click(()=> $('ul').append(
`<li class='item'> ${$('.todoInput').val()}</li>`
)
);

$('ul').on('click', 'li', function() {$(this).css('text-decoration', 'line-through')});

//text


