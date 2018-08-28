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