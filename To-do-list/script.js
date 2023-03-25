$('.addTodo').click(()=> $('ul').append(
`<li class='item'> ${$('.todo').val()}</li>`
)
);

$('li.item').on('click', 'li.item', function() {$('li.item').css('text-decoration', 'line-through')});

// $(function(){$('li.item').on('click', 'li.item', function() {$('li.item').css('text-decoration', 'line-through')})});



