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

var objet = document.querySelector('img.logo');
var cptClic = 0;
objet.onclick = function() {

  cptClic += 1;
  document.querySelector('p.compteur').textContent = 'Vous avez cliqué ' + cptClic + ' fois !';
  var img = document.querySelector('img.logo')
  var src = img.getAttribute('src');
  src = 'images./firefox-icon-' + cptClic % 4 + '.png'

  img.setAttribute('src', src);


}


/* bloc de commentaires */