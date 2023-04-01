$('.addButton').click(()=> $('ul').append(
`<li class='item'> <div class='itemContainer'> ${$('.todoInput').val()} 
<div class='buttons'>
<button name='delete' class='deleteButton'> <img class='icon delete' src='assets/icon_trash_bin.png'> </button> <button class='doneButton'> <img class='icon done' src='assets/done_grey_icon.png'> </button> </div> </div></li>`
)
);

$('ul').on('click', 'li', function() {$(this).css('color', 'lightgrey')});
$('ul').on('click', 'li', function() {$(this).css('font-style', 'italic')});
$('ul').on('click', '.done', function() {$(this).attr("src", "assets/done_purple_icon.png")});


$('.itemContainer').on('click', '.deleteButton', function() {console.log('test')});
