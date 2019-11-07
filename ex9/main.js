
  //If 2 of the checkboxes are checked add (purple = blue + red), (green = blue + yellow), (orange = red + yellow)
  //If 1 of the checkboxes is checked add (yellow, blue or red) as li and the class to it
  
  //Using jQuery call a function from the button's id (#delete)
  //The function removes all the elements from the unordered list based on the checkboxes as the previous function
  //Use jQuery as much as you can in selecting elements and other tasks

$('#create').click(function(){
	var list =  $('#list')
	var blue =  $('#1').prop('checked')
	var red =	$('#2').prop('checked')
	var yellow =$('#3').prop('checked')


	if(blue && red && yellow){
		list.append('<li> Black </li>').addClass('black')
	}else{
		if(blue && red){
			list.append('<li>purple</li>').addClass('purple')
		}
		if(blue && yellow){
			list.append('<li>green</li>').addClass('green')
		}
		if(red && yellow){
			list.append('<li> orange </li>').addClass('orange')
		}
		if(red && !blue && !yellow){
			list.append('<li> red </li>').addClass('red')
		}
		if(blue && !red && !yellow){
			list.append('<li> blue </li>').addClass('blue')
		}
		if(yellow && !red && !blue){
		list.append('<li> yellow </li>').addClass('blue')
		}
	}
	
})

$('#remove').click(function(){
	$('#list').html("")

})
