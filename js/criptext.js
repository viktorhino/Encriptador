/** ENFOCAMOS EL CURSOR EN EL CAMPO DE TEXTO LISTO PARA ENCRIPTAR */
document.getElementById("txt-origen").focus();


function encriptar(){
    let campoOrigen = document.getElementById("txt-origen");
    let textoOrigen = campoOrigen.value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafoMensaje = document.getElementById("parrafo-mensaje");
    let imagenMensaje = document.getElementById("img-mensaje");
    /** PARA RESETEAR MENSAJES DE ERROR */
    parrafoMensaje.style.setProperty("background-color", "");
    parrafoMensaje.style.setProperty("color", "#7b8084");
    parrafoMensaje.style.setProperty("font-weight", "400");
    campoOrigen.style.setProperty("border", "1px dotted #d8dfe8");

    let textoEncriptado = textoOrigen
                            .replace(/a/gi,"arx")
                            .replace(/e/gi,"enter")
                            .replace(/i/gi,"imes")
                            .replace(/o/gi,"ober")
                            .replace(/u/gi,"ufat");

    if(textoOrigen.length != 0){
        document.getElementById("txt-origen").value = textoEncriptado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafoMensaje.textContent = ""
        imagenMensaje.src = "img/encriptado-ok.png"
    } else {
        imagenMensaje.src = "img/inicial.png"
        tituloMensaje.textContent = "Ningún mensaje encontrado"
        parrafoMensaje.textContent = "Ingrese el texto que desea encriptar o desencriptar"
        document.getElementById("txt-origen").focus();
        /** ENVIAR MENSAJES DE ERROR */
        parrafoMensaje.style.setProperty("background-color", "pink");
        parrafoMensaje.style.setProperty("color", "red");
        parrafoMensaje.style.setProperty("font-weight", "700");
        parrafoMensaje.style.setProperty("border-radius", "1em");
        campoOrigen.style.setProperty("border", "1px dotted red");
    }

}

function desencriptar(){
    let campoOrigen = document.getElementById("txt-origen");
    let textoOrigen = campoOrigen.value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafoMensaje = document.getElementById("parrafo-mensaje");
    let imagenMensaje = document.getElementById("img-mensaje");
    /** PARA RESETEAR MENSAJES DE ERROR */
    parrafoMensaje.style.setProperty("background-color", "");
    parrafoMensaje.style.setProperty("color", "#7b8084");
    parrafoMensaje.style.setProperty("font-weight", "400");
    campoOrigen.style.setProperty("border", "1px dotted #d8dfe8");

    let textoDesencriptado = textoOrigen
                            .replace(/arx/gi,"a")
                            .replace(/enter/gi,"e")
                            .replace(/imes/gi,"i")
                            .replace(/ober/gi,"o")
                            .replace(/ufat/gi,"u");

    if(textoOrigen.length != 0){
        document.getElementById("txt-origen").value = textoDesencriptado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafoMensaje.textContent = ""
        imagenMensaje.src = "img/desencriptado-ok.png"
    } else {
        imagenMensaje.src = "img/inicial.png"
        tituloMensaje.textContent = "Ningún mensaje encontrado"
        parrafoMensaje.textContent = "Ingrese el texto que desea encriptar o desencriptar"
        document.getElementById("txt-origen").focus();
        /** ENVIAR MENSAJES DE ERROR */
        parrafoMensaje.style.setProperty("background-color", "pink");
        parrafoMensaje.style.setProperty("color", "red");
        parrafoMensaje.style.setProperty("font-weight", "700");
        parrafoMensaje.style.setProperty("border-radius", "1em");
        campoOrigen.style.setProperty("border", "1px dotted red");
    }

}

