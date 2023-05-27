function encriptar(){
    let textoOrigen = document.getElementById("txt-origen").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafoMensaje = document.getElementById("parrafo-mensaje");
    let imagenMensaje = document.getElementById("img-mensaje");

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
        alert("Debe ingresar algún texto");
    }

}

function desencriptar() {
    let textoOrigen = document.getElementById("txt-origen").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafoMensaje = document.getElementById("parrafo-mensaje");
    let imagenMensaje = document.getElementById("img-mensaje");
    
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
        alert("Debe ingresar algún texto");
    }                            
}