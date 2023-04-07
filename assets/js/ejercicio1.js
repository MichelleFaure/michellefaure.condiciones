



function borde(estiloimagen){
    let imagen = document.querySelector(".photo")


    if(imagen.style.border == "2px solid red"){
        imagen.style.border = "0px solid red"
    }
    
    else {
        imagen.style.border = "2px solid red"
    }
}