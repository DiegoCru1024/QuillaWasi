window.onload = function (){
    for(var i = 0; i < 50; i++){
        var container = document.getElementById("test")
        var img = document.createElement("img")
        img.src = `../img/mainGallery/gallery(${i+1}).jpg`
        img.setAttribute("onclick","openIMG(this.src);")
        container.append(img)
    }
}

function openIMG(img){
    var imageBox = document.getElementById("fullImageBox")
    var imageItem = document.getElementById("fullImage")

    imageBox.style.zIndex = "99999"
    imageBox.style.opacity = 1
    imageItem.src = img
}

function closeIMG(){
    var imageBox = document.getElementById("fullImageBox")
    imageBox.style.opacity = 0;
    imageBox.style.zIndex = "-99999"
}
