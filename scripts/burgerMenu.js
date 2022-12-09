var menuVisible = false
var button = document.getElementById("burguerButton")
var menuDiv

function switchMenu(){
    if(menuVisible){
        menuVisible = false
        button.style.opacity = 0
    } else {
        menuVisible = true
        button.style.opacity = 1
    }
}