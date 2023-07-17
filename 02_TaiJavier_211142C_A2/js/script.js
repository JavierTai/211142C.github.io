

var pianoKeys = document.querySelectorAll(".key");

var hitbox1 = document.querySelectorAll(".hitbox1");
var hitbox2 = document.querySelectorAll(".hitbox2");
var hitbox3 = document.querySelectorAll(".hitbox3");
var hitbox4 = document.querySelectorAll(".hitbox4");


function playSound(me)
{
	console.log(me.currentTarget);
	
	var keytoPlay = null;
	
	if(me.currentTarget.classList.contains("hitbox1") == true || me.currentTarget.classList.contains("hitbox2") == true 
	|| me.currentTarget.classList.contains("hitbox3") == true ||  me.currentTarget.classList.contains("hitbox4") == true )
	{
		keytoPlay = me.currentTarget.parentNode.children[3];
	}
	else
	{
		keytoPlay = me.currentTarget.children[1];
	}
	
	console.log(keytoPlay);
	keytoPlay.load();
	keytoPlay.play();
	
}

for (let item of pianoKeys) { 
  item.addEventListener("click", playSound);
}

for (let item of  hitbox1) { 
  item.addEventListener("click", playSound);
}

for (let item of  hitbox2) { 
  item.addEventListener("click", playSound);
}

for (let item of  hitbox3) { 
  item.addEventListener("click", playSound);
}

for (let item of  hitbox4) { 
  item.addEventListener("click", playSound);
}

var notes = document.querySelectorAll(".footerImage > img");

function animateNotes()
{
	
	notes[1].style.paddingBottom = Math.floor(Math.random() * 50) + "px";
	notes[5].style.paddingBottom = Math.floor(Math.random() * 50) + "px";
	
}

animateTimer = setInterval(animateNotes, 500); // animate the footer


var contentButton = document.querySelectorAll(".contentButtons > button");
var contentToShow  = null;

for (let i = 0; i < contentButton.length; i++) { 
	contentButton[i].addEventListener("click", function(){toggleContent(i + 1)});
}

function toggleContent(num){
	
	for (let i = 0; i < contentButton.length; i++) { 
		contentToShow = document.querySelector(".contentSub" + (i+1))	
			contentToShow.classList.add("hideContent");
			contentToShow.classList.remove("showContent");
		
	}
	
	contentToShow = document.querySelector(".contentSub" + num);
	contentToShow.classList.remove("hideContent");
	contentToShow.classList.add("showContent");
	
}


var buttonRight = document.querySelector("#slideshowRight");
var buttonLeft = document.querySelector("#slideshowLeft");
var currentImage =  document.querySelector(".contentSlideshow > img");
var slideshowImages = ["uprightPiano.png", "digitalPiano.png", "grandPiano.jpg"]; // images


buttonRight.addEventListener("click", function(){ nextSlide(1)});
buttonLeft.addEventListener("click", function(){ nextSlide(-1)});




function nextSlide(pageUpDown){
	var slideshowIndex;
	for(let i = 0; i < slideshowImages.length; i++)
	{
		if(currentImage.src == "" + slideshowImages[i])
		{
			slideshowIndex = i;
			
		}
	}
	
	if(slideshowIndex ==  (slideshowImages.length - 1) && pageUpDown == 1)
	{
		slideshowIndex = 0;
	}
	else if (slideshowIndex == 0 && pageUpDown == -1)
	{
	
		slideshowIndex = slideshowImages.length - 1;
	}
	else
	{
		slideshowIndex += pageUpDown
	}
	
	currentImage.src="images/" + slideshowImages[slideshowIndex];
	
}