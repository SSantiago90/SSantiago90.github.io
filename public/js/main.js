window.onload = function(){
	var card_1 = {art: 'public/img/regular.png',sound:'public/sound/attack.ogg'};
	var card_2 = {art: 'public/img/golden.gif',sound:'public/sound/play.ogg'};
	var eg = 'fourmanasevensevenfourmanasevensevenS M A L L I N D I E C O M P A N Yfourmanasevensevenfourmanasevensevenfourmanasevensevenfourmanasevensevenfourmanasevensevenfourmanasevensevenfourmanasevensevenwhyareyoustillhere?'.split('');
	var egix = 0;
	var card, sound, rndm = undefined;		

	var body = document.querySelector('#main');
	var audio = document.querySelector('#audio');

	body.addEventListener('click', function(evt) {
		rndm = +(Math.random()*10+1).toFixed();
		(rndm === 1)?	card=card_2.art : card=card_1.art;
		(rndm === 1)?	sound=card_2.sound : sound=card_1.sound;	
		var x = evt.clientX,
		    y = evt.clientY,
		 img = document.createElement("img");
		 img.className = "card",
		 img.style.top = y - 192 + "px",
		 img.style.left = x - 143 + "px",
		 img.draggable = false,		 
		 img.ondragstart = function() {
		      return false;
		 },
		 img.src = card;
		 body.appendChild(img),
		 audio.src = sound;
		 audio.play();
		 console.log(eg[egix++]);				
	});
};