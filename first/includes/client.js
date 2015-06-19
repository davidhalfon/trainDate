$(document).ready(function() {
	var users = {};
	var abc;

$.get("https://dateontrain.herokuapp.com/getAllUsers", function(data){
		users = data;

		for(var i=1 ; i<data.length; i++){


  //create paragraph
  var para = document.createElement("p");
  para.setAttribute("class" , "circle");
  para.setAttribute("id" , data[i].email);



//set arrtibutes from json fields
para.style.left = data[i].left+"px";
para.style.top = data[i].top+"px";
var bgr = data[i].img;

para.style.backgroundImage = "url('"+bgr+"')";



  //insert the paragraph to a div called dvi1
  var element = document.getElementById("div1");
  element.appendChild(para);




}


}); 

	setTimeout (function() {

		
		localStorage.setItem('users', JSON.stringify(users));
		a = JSON.parse(localStorage.getItem('users'));
		var whoAmI = users[0];
		localStorage.setItem('who', JSON.stringify(whoAmI));
				
		countbackTime(whoAmI.ttime); 

		

		$( ".circle" ).click(function() {

			localStorage.setItem('clicked', this.id);
			window.location.href = "./profile.html";

		});


	}, 1000);



	function countbackTime(minutes){

	var seconds = minutes*60;
	var timePerInterval= seconds/1000*1000;

	counter = 1;
	setInterval(function(){
	$(".counting").html(counter + "%"); 
	counter++;
	
	localStorage.setItem('time', counter);

	}, timePerInterval);

}


	





	
});