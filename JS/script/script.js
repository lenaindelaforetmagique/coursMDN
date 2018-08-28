var monTitre = document.querySelector('h1');
monTitre.textContent = 'Hello world!';

/*
let parfumGlace = 'chocolat';
if (parfumGlace === 'Chocolat') {
  alert("J'adore la glace au chocolat!");
} else {
  alert("Non pas de chocolat !");
}
/**/

var body = document.querySelector('html');
//body.onmouseover = function(event) {
body.onclick = function(event) {
  var titre = document.querySelector('p');

  var rect = titre.getBoundingClientRect();
  var dx = -(event.clientX - (rect.x + rect.width / 2)) / 100;
  var dy = -(event.clientY - (rect.y + rect.height / 2)) / 100;
  titre.style.textShadow = dx + "px " + dy + "px 1px black";
  //console.log(titre.getBoundingClientRect()); //event.clientX);

}
// body.onmouseout = function() {
//   var titre = document.querySelector('h1');
//   titre.style.textShadow = "0px 0px 0px black";
//
// }



var logo = document.querySelector('img.logo');
var cptClic = 0;
logo.onclick = function() {
  cptClic += 1;
  document.querySelector('p.compteur').textContent = 'Vous avez cliqué ' + cptClic + ' fois !';

  var src = logo.getAttribute('src');
  console.log(src);
  src = 'images/firefox-icon-' + cptClic % 4 + '.png'

  logo.setAttribute('src', src);
}


var button = document.querySelector('button');
var monTitre = document.querySelector('h1');

function defineUser() {
  var myName = prompt('Veuillez saisir votre nom.');
  localStorage.setItem('nom', myName);
  monTitre.textContent = 'Mozilla est cool, ' + myName;
}


if (!localStorage.getItem('nom')) {
  defineUser();
} else {

  var myName = localStorage.getItem('nom');
  monTitre.textContent = 'Mozilla est cool, ' + myName;
}

button.onclick = function() {
  defineUser();
}



/* bloc de commentaires */