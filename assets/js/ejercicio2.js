


function verificar(){
    let stickerUno = Number(document.querySelector(".stickerUno").value) ;
    let stickerDos = Number(document.querySelector(".stickerDos").value) ;
    let stickerTres = Number(document.querySelector(".stickerTres").value) ;
    let mensaje = document.querySelector(".mensaje");
    
   let totalStickers = stickerUno + stickerDos + stickerTres
    
   if(totalStickers > 10){
        mensaje.innerHTML = "Llevas demasiados";
    }
    else{
        mensaje.innerHTML = "Gracias!";

    }
}