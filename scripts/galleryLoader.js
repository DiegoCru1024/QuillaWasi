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
