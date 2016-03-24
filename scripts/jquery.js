$(document).ready(function() {

//Add list item
	$('.add').click(function () {
		var txtbox = document.getElementById('input');
		var txtval = txtbox.value;
		// event.preventDefault(); is this necessary?

		if (!$.trim($('#input').val())) { //! means "is nothing"
			//the input is empty, alert
			alert('Please enter something to add to your shopping list');
		} else {
			//add list item
			$('<div class="list-item"><input type="checkbox" class="check" /> <p class="item-name">' + txtval + '</p> <button class="delete">x</button--></div><!--list-item-->').appendTo('#list');

			//set the text boxs' value to zero
			document.getElementById('input').value = '';
		}  //closes if statement
	}); //closes .click(function()) 


//Delete list item
	$('#list').on('click', '.delete', function() {
		$(this).parent().remove();
		
	}); //closes .delete.click(function);


//Strike through
	$('#list').on('click', '.list-item', function() {	
			$(this).toggleClass('checked');
			if ($(this).children('.check').prop('checked') == true) {
				$(this).children('.check').prop('checked', false);
			} else {
				$(this).children('.check').prop('checked', true);
			}
	});	

});