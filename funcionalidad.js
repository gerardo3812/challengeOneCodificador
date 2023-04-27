var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var muneco = document.querySelector(".contenedor-muneco");
var contenedorh3 = document.querySelector(".contenedor-h3");
var contenedorTexto = document.querySelector(".contenedor-texto");
var textoRecuperado = document.querySelector(".texto-recuperado");
var areaTextoBorrar = document.querySelector(".area-texto");
var botonCopiar = document.querySelector(".btn-copiar");

botonEncriptar.onclick = encriptar
botonDesencriptar.onclick = desencriptar
botonCopiar.onclick = copiarTexto
function encriptar(){
ocultarElementos();
 var contenidoArea = recuperarTexto();
 textoRecuperado.textContent = encriptarTexto(contenidoArea);
//textoRecuperado.textContent = encriptarTexto(recuperarTexto());
}
function desencriptar(){
    var contenidoencriptado = recuperarTexto();
    textoRecuperado.textContent = desencriptarTexto(contenidoencriptado);
}

function recuperarTexto(){
    var areaTexto = document.querySelector(".area-texto");
    return areaTexto.value;
}

function ocultarElementos(){
    muneco.classList.add("ocultar");
    contenedorh3.classList.add("ocultar");
    contenedorTexto.classList.add("ocultar");
}
function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal ="";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
         textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal ="";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
        i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i +4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i +3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i + 3;
        }
        else{
         textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}
function ocultarTextoEscrito(){
    areaTextoBorrar.value = '';
}
function copiarTexto(){
    ocultarTextoEscrito();
    // contenedorTexto.clipboard.writeText(textoRecuperado.textContent);
    // return contenedorTexto.value;
    navigator.clipboard.writeText(textoRecuperado.textContent);
    return textoRecuperado.value;
}




