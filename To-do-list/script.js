$('ul').on( 'click', 'li', function () {
  $(this).css('text-decoration', 'line-through')
} );

$('.addTodo').click(()=> $('ul').append(
`<li class='item'> ${$('.todo').val()}</li>`
)
);






