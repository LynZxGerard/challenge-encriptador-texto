// Selectores DOM
const inputText = document.getElementById("input-text");
const outputText = document.getElementById("output-text");
const encryptButton = document.getElementById("encrypt-button");
const decryptButton = document.getElementById("decrypt-button");
const copyButton = document.getElementById("copy-button");
const placeholderImage = document.getElementById('placeholder-image');

outputText.style.display = 'none';
copyButton.style.display = 'none';

// Función para encriptar
function encrypt(text) {
    return text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

// Función para desencriptar
function decrypt(text) {
    return text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

// Evento para encriptar el texto
encryptButton.addEventListener("click", () => {
    const text = inputText.value;

    if (text.trim() === "") {
        alert("Por favor, ingresa algún texto antes de encriptar.");
    } else if (validateInput(text)) {
        outputText.value = encrypt(text.toLowerCase());
        placeholderImage.style.display = 'none'; // Ocultar la imagen
        outputText.style.display = 'block'; // Mostrar el textarea
        copyButton.style.display = 'block'; // Mostrar el boton de copiar
    } else {
        alert("Por favor, ingresa solo letras minúsculas, mayúsculas sin acentos ni caracteres especiales.");
    }
});

// Evento para desencriptar el texto
decryptButton.addEventListener("click", () => {
    const text = inputText.value;

    if (text.trim() === "") {
        alert("Por favor, ingresa algún texto antes de desencriptar.");
    } else if (validateInput(text)) {
        outputText.value = decrypt(text.toLowerCase());
        placeholderImage.style.display = 'none'; // Ocultar la imagen
        outputText.style.display = 'block'; // Mostrar el textarea
        copyButton.style.display = 'block'; // Mostrar el boton de copiar
    } else {
        alert("Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.");
    }
});

// Evento para copiar el texto desencriptado
copyButton.addEventListener("click", () => {
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles.");
});

// Función para validar el texto ingresado
function validateInput(text) {
    const regex = /^[a-z\s]*$/; // Solo permite letras minúsculas y espacios
    return regex.test(text);
}
