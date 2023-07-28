var navMenu=document.querySelectorAll('.horizontal-list a');
console.log(navMenu);
for(let i=0;i<navMenu.length;i++){
	navMenu[i].addEventListener('click',function(event){
		event.preventDefault();
		var targetSectionId= this.innerText.toLowerCase();
		console.log(targetSectionId);
		var targetSection=document.getElementById(targetSectionId);
		console.log(targetSection);
		var interval=setInterval(function(){
			var targetCo=targetSection.getBoundingClientRect();
			console.log(targetCo);
			if(targetCo.top<=0){
				clearInterval(interval);
				return;
			}
			window.scrollBy(0,50);
		},25);
	});
}

var skills=document.getElementById('skills');
console.log(skills);
var skillsCo=skills.getBoundingClientRect();
if(window.scrollTo(0,skillsCo)){
	
}