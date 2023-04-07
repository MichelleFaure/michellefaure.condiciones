
function verificar(){
    let num1 = document.querySelector("#numuno").value;
    let num2 = document.querySelector("#numdos").value;
    let num3 = document.querySelector("#numtres").value;
    let mensaje = document.querySelector(".mensaje");

    if(num1 == "9" && num2 == "1" && num3 == "1" ){
        mensaje.innerHTML = "Password 1 correcto";
    }

    else if(num1 == "7" && num2 == "1" && num3 == "4" ){
        mensaje.innerHTML = "Password 2 correcto";
    }

    else{
        mensaje.innerHTML = "password INCORRECTO";
    }

}