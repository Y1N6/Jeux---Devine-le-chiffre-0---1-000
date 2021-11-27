let nbEssais = 0;
let number = "";
let nbTentives = document.getElementById("nbTentatives");
let answer = document.getElementById("answer");
// Fichier audio
let audio = new Audio(
  "https://initiativedeveloppeur.fr/wp-content/uploads/2019/03/sf_public_jeunes_75p_applaudissements_01.mp3"
);
// Créér un nombre aléatoire
const random = Math.floor(Math.random() * 1000) + 1;
console.log(random);
// N'actualise pas la page avec la touche entrer mais Donne la bonne reponse
document
  .querySelector("#form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
  });
// Afficher le nombre de tentatives
nbTentatives.classList.toggle("visible");
// Bloque la console
console.log("Tu ne trouveras rien ici, oust");
console.log = function () {};
// Inserer le pseudo
let name = prompt("Insère ici ton Pseudo");
// Affiche le pseudo sur le site
document.getElementById("name").innerHTML = name;

answer.innerHTML = number;
// Selectionne l'Id text et agis avec la saisis quand on clique ailleurs
document.getElementById("text").addEventListener("change", function (e) {
  number = e.target.value;
  // Incrémente le nombre d'essais et l'affiche
  nbEssais++;
  nbTentatives.innerHTML = `Nombre de tentatives : ${nbEssais}`;
  //....................................
  // console.log(number);
  if (number > random) {
    // answer.innerHTML = `Trop grand, vise plus bas (${number})`;
    text.innerHTML = "";
    text.style.backgroundColor = "rgb(255, 108, 110)";
    document.getElementById("form").reset();
    document.getElementById(
      "text"
    ).placeholder = ` ${number} , C'est moins !`;
  } else if (number < random) {
    // answer.innerHTML = `Trop petit, vise plus haut(${number})`;
    text.style.backgroundColor = "rgb(255, 108, 110)";
    document.getElementById("form").reset();
    document.getElementById(
      "text"
    ).placeholder = ` ${number} , C'est plus !`;
  } else if (isNaN(number)) {
    // answer.innerHTML = `Ceci n'est pas un chiffre : (${number})`;
    text.style.backgroundColor = "rgb(255, 108, 110)";
    document.getElementById("form").reset();
    document.getElementById("text").placeholder =
      "Kezako ? il faut un nombre !";
  } else {
    answer.innerHTML = `Victoire ! </br> Tu as trouvé au bout de ${nbEssais} tentatives ! </br> La bonne réponse était ${number}. `;
    text.style.backgroundColor = "#93B7BE";
    nbTentatives.style.display = "none";
    document.getElementById("form").reset();
    document.getElementById("text").style.display = "none";
    document.getElementById("submit").style.display = "none";
    document.getElementById("Norejouer").style.display = "block";
    audio.play();
  }
});

// reload la page suite appui sur bouton "rejouer"
document.getElementById("rejouer").addEventListener("click", function () {
  location.reload();
});

// Affiche la réponse final une fois trouvé
answer.innerHTML = number;