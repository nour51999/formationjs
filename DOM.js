//Dom accéder aux éléments html et faire un changement
const titre= document.getElementsByClassName("title");
console.log("récupération de tous les éléments");
const h=document.getElementsByTagName("h2");
console.log("récupération par le nom de balise");

const id=document.getElementById("demo");
document.getElementById("demo").style.color="blue";
console.log("récupération des nom par id");
document.getElementById("demo").innerText="text modifié avec innertext";
function salutation() {
    if (id.innerHTML==="libre pour tous le monde") {
        
        id.innerHTML="Bonjour tous le monde"}
        else{
            id.innerHTML="libre pour tous le monde"
        }
   
    

}
id.onclick=salutation;

const boucleliste=document.querySelector("#list-livre li:nth-child(2) .name")
console.log("element",boucleliste)

const myselector=Document.querySelectorAll("#list-livre .name");
console.log("elements",myselector);
// document.getElementById("demo").innerHTML="<h1></h1>";