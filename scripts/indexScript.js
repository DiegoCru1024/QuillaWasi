var welcomeHead = document.getElementById("welcome-header")
var selectLang = document.getElementById("select-lang")
var buttonES = document.getElementById("buttonES")
var buttonEN = document.getElementById("buttonEN")
var userLang = navigator.language

console.log(userLang)



if(userLang.includes("es")){
    welcomeHead.innerHTML = "Les da la bienvenida...";
    selectLang.innerHTML = "Elija su idioma preferido:"
    buttonEN.innerHTML = "Inglés"
    buttonES.innerHTML = "Español"
}
if(userLang.includes("en")){
    welcomeHead.innerHTML = "Welcomes you..."
    selectLang.innerHTML = "Choose your preferred language:"
    buttonEN.innerHTML = "English"
    buttonES.innerHTML = "Spanish"
}