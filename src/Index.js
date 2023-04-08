function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    
    let textoCifrado = texto
        .replace(/e/gi, "eneter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "img/imag1.png";
    } else {
        muñeco.src = "img/imag2.png";
        tituloMensaje.textContent = "Ningún Mensaje fue encontrado";
        parrafo.textContent = "Ingresa el mensaje que deseas encriptar o desencriptar";
        swal("ERROR!", "Debes ingresar algún texto");
   }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "img/imag3.png";
    } else {
        muñeco.src = "img/imag2.png";
        tituloMensaje.textContent = "Ningún Mensaje fue encontrado";
        parrafo.textContent = "Ingresa el mensaje que deseas encriptar o desencriptar";
        swal("ERROR!", "Debes ingresar algún texto");
    }
}

window.onload = function() {
  document.getElementById("texto").value = "";
}

//Cifrador Cesar

function encriptarCar () {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    let shift = 3
    let result = "";
  
    if (texto == "") {
      muñeco.src = "img/imag2.png";
      swal("ERROR!", "Debes ingresar algún texto");
      return;
  
    }
  
    for (let i = 0; i < texto.length; i++) {
      let charCode = texto.charCodeAt(i);
      let shiftedCharCode = charCode + shift;
  
      if (charCode >= 65 && charCode <= 90) {
        shiftedCharCode = ((shiftedCharCode - 65) % 26) + 65;
      } else if (charCode >= 97 && charCode <= 122) {
        shiftedCharCode = ((shiftedCharCode - 97) % 26) + 97;
      }
  
      result += String.fromCharCode(shiftedCharCode);
    }
    
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    muñeco.src = "img/imag1.png";
  
    
    document.getElementById("texto").value = result;
  }
  
  function desencriptarCar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco"); 
    let shift = 3;
    let result = "";
  
    if (texto == "") {
      muñeco.src = "img/imag2.png";
      swal("ERROR!", "Debes ingresar algún texto");
      return;
  
    }
  
    for (let i = 0; i < texto.length; i++) {
      let charCode = texto.charCodeAt(i);
  
      if (charCode === 32) {
        // espacio
        result += " ";
        continue;
      }
  
      let shiftedCharCode = charCode - shift;
      if (charCode >= 65 && charCode <= 90) {
        shiftedCharCode = ((shiftedCharCode - 90) % 26) + 90;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "img/imag3.png";
      } else if (charCode >= 97 && charCode <= 122) {
        shiftedCharCode = ((shiftedCharCode - 122) % 26) + 122;
      }
  
      result += String.fromCharCode(shiftedCharCode);
    }
  
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    muñeco.src = "img/imag3.png";
  
    document.getElementById("texto").value = result;
  }
  
  window.onload = function() {
    document.getElementById("texto").value = "";
  }