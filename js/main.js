// JavaScript Document

(function(){
	"use strict";
	
	var buttons = document.querySelectorAll("#main li");
	var changeImg = document.querySelector("#show-img");

	function changePic(e) {	
		console.log("./images/showcase/"+e.currentTarget.id+".png");
		e.preventDefault();	
		changeImg.src="./images/showcase/"+e.currentTarget.id+".png";	
	}	
    
	for(var i =0; i<buttons.length; i++){
		buttons[i].addEventListener("click", changePic, false);
	}
    }
    
    )();