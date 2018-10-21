var change = ["yellow","red","green"];
var b = new Bird("yellow");
b.render();
b.fly();
b.div.onclick = shoot;
var shots =15;
var kills = 0;
var kill = document.querySelector('#kills');
var shot = document.querySelector('#shots');

function shoot(){

var change_bird = Math.round((Math.random()*2));
console.log(Math.round((Math.random()*2)));
b.die();
b = new Bird(change[change_bird]);
b.render();
b.fly();
b.div.onclick = shoot;
kills++;
kill.innerHTML = kills + " ";
	
}

function end(){
	var game_over = document.createElement('div');
	game_over.setAttribute('class','over');
	var bod = document.getElementsByTagName('body');
	document.body.appendChild(game_over);
}

       function soundClick(){
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = 'gunshot.wav'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}


function count(){
	var nothing = document.getElementsByClassName(`bird ${b.color}`);
	
		soundClick();
	    --shots;
	if(shots == 0){
     end();
 		}
    shot.innerHTML = shots + " ";	

	console.log(onclick == b.getLeft());
}

// функцией shoot() при 1) найти птицу 2)setTimeout(function(){}) -> removeChild
// удалитиь со временем
