console.log("JS connecté");
const nom = "Clavier"; 
let prix = 250 ;
let elementNom = document.getElementById("nom");
let price = document.getElementById("prix");
elementNom.textContent = nom;
price.textContent=prix + "DH";
prix = 199; 
price.textContent = prix +"DH";
nom = "souris"
console.log(nom);
