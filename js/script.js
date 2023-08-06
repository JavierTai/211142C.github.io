

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
		keytoPlay = me.currentTarget.parentNode.children[3];	//white key
	}
	else
	{
		keytoPlay = me.currentTarget.children[1]; //black key
		
	}
	
	animatePianoWorks();
	
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
	for(let i = 0; i < notes.length - 2; i++)
	{
		
		//notes[i + 1].style.paddingBottom = Math.floor(Math.random() * 50) + "px";
		notes[i + 2].style.bottom = Math.floor(Math.random() * 50) + "px";
	}
	
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
var slideshowDots = document.querySelectorAll("#slideshowIndicator > span");
var slideshowImages = ["uprightPiano.png", "digitalPiano.png", "grandPiano.png"]; // images
var slideshowIndex = 0;

buttonRight.addEventListener("click", function(){ nextSlide(1)});
buttonLeft.addEventListener("click", function(){ nextSlide(-1)});
slideshowDots[slideshowIndex].classList.toggle("dotSelected");



function nextSlide(pageUpDown){
	
	slideshowDots[slideshowIndex].classList.toggle("dotSelected");
	
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
	
	slideshowDots[slideshowIndex].classList.toggle("dotSelected");
	currentImage.src="images/" + slideshowImages[slideshowIndex];
	changePianoType();
	
}


var notesLetters = ["c", "d", "e", "f", "g", "a", "b"]; // notes 
var pianoTypes = ["uprightPiano", "digitalPiano", "grandPiano"];
var currentPianoText = document.querySelector(".keyboardContainer > div > span");

function changePianoType()
{
	
	for (let i = 0; i < hitbox1.length; i++)
	{
		hitbox1[i].parentNode.children[3].src = "audio/" + pianoTypes[slideshowIndex]  +"/" + notesLetters[i] + ".mp3";	
		console.log("audio/" + pianoTypes[slideshowIndex]  +"/" + notesLetters[i]);
	}
	var string = pianoTypes[slideshowIndex].split('P'); // split the file name
	string[0] = string[0].charAt(0).toUpperCase() + string[0].slice(1); // title case it
	currentPianoText.innerText =string[0] + ' ' + 'P' + string[1];  // add the p back in since it got remove by .split
}


var pwKey = document.querySelector("#pianoWorksKey");
var animKey = false;
var keyAngle = 0;

var pwHammer = document.querySelector("#pianoWorksHammer");
var animHammer = false;
var hammerAngle = 0;

var pwDamper = document.querySelector("#pianoWorksDamper");
var animDamper = false;
var damperDisplace = 0; //value taken from images's css style

var pwDamperLever = document.querySelector("#pianoWorksDamperLever");
var animDamperLever = false;
var damperLeverAngle = 0; 

var animatePiano1 = null; 
var animatePiano2 = null;
var animatePiano3 = null;
var animatePiano4 = null;


var keyPopup = document.querySelector("#pianoWorksKeyPopup");
var hammerPopup = document.querySelector("#pianoWorksHammerPopup");
var damperPopup = document.querySelector("#pianoWorksDamperPopup");

pwKey.addEventListener("click", (function(){showPopup(keyPopup)}));
pwHammer.addEventListener("click", (function(){showPopup(hammerPopup)}));
pwDamper.addEventListener("click",(function(){showPopup(damperPopup)}));

console.log(keyPopup);

function showPopup(Popup)
{	
	Popup.classList.toggle("hideContent");
}


function animatePianoWorks()
{	
	
	clearTimeout(animatePiano1);
	clearTimeout(animatePiano2);
	clearTimeout(animatePiano3);
	clearTimeout(animatePiano4);
		
	
	animatePiano1 = setInterval(function(){animatePianoKey()}, 20); // animate the key being pressed down
	animatePiano2 = setInterval(function(){animatePianoHammer()}, 20); // animate the hammer turning
	animatePiano3 = setInterval(function(){animatePianoDamper()}, 20); // animate the damper being lifted
	animatePiano4 = setInterval(function(){animatePianoDamperLever()}, 20); // animate the damperLever turning
}

function animatePianoKey()
{
	
	
	
	if(keyAngle != 6 && animKey == false)
	{
		keyAngle += 1;
		pwKey.style.rotate = keyAngle + "deg";
		if(keyAngle == 5)
		{
			animKey = true;
		}
		
	}
	else if (keyAngle != 0 && animKey == true)
	{
		if(keyAngle == 1)
		{
			animKey = false;
			clearTimeout(animatePiano1);
		}
		keyAngle -= 1;
		pwKey.style.rotate = keyAngle + "deg";
		
	}
	
}

function animatePianoHammer()
{
	
	
	if(hammerAngle != 21 && animHammer == false)
	{
		hammerAngle += 5;
		pwHammer.style.rotate = hammerAngle + "deg";
		if(hammerAngle == 20)
		{
			animHammer = true;
		}
		
	}
	else if (hammerAngle != 0 && animHammer == true)
	{
		if(hammerAngle == 5)
		{
			animHammer = false;
			clearTimeout(animatePiano2);
		}
		hammerAngle -= 5;
		pwHammer.style.rotate = hammerAngle + "deg";
		
	}
	
}

function animatePianoDamper()
{

	if(damperDisplace != -17 && animDamper== false)
	{
		damperDisplace -= 2;
		pwDamper.style.top = damperDisplace + "px";
		if(damperDisplace == -16)
		{
			animDamper = true;
		}
		
	}
	else if (damperDisplace != 0 && animDamper == true)
	{
		if(damperDisplace == -2)
		{
			animDamper = false;
			clearTimeout(animatePiano3);
		}
		damperDisplace += 2;
		pwDamper.style.top = damperDisplace + "px";
		
	}
	
}

function animatePianoDamperLever()
{

	if(damperLeverAngle != -17 && animDamperLever == false)
	{
		damperLeverAngle -= 2;
		pwDamperLever.style.rotate = damperLeverAngle + "deg";
		if(damperLeverAngle == -16)
		{
			animDamperLever = true;
		}
		
	}
	else if (damperLeverAngle != 0 && animDamperLever == true)
	{
		if(damperLeverAngle == -2)
		{
			animDamperLever = false;
			clearTimeout(animatePiano4);
		}
		damperLeverAngle += 2;
		pwDamperLever.style.rotate = damperLeverAngle + "deg";
		
	}
	
}
