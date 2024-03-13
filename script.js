const mensaje = document.querySelector("#outputdecrypt");
const munieco = document.querySelector(".contenedor-munieco");
const h3 = document.querySelector(".contenedor-h3");
const result = document.querySelector("#resultado");
const parrafo = document.querySelector(".contenedor-parrafo");
const seccion2 = document.querySelector(".seccion-2");
let button = document.querySelector("btn-copiar");

function formatMessage(decode = false) {
    hideTextAndImages();
    let string = document.getElementById("inputencrypt").value.toLowerCase();
    const charactersToReplace = {
        e: "enter",
        i: "imes",
        a: "ai",
        o: "ober",
        u: "ufat",
    };
    const encodeString = decode
        ? //Operador ternario para optar por encriptacion o desencriptación
        /(?:enter|imes|ai|ober|ufat)/gi
        : /(?:e|i|a|o|u)/gi;

    const formatedString = string.replace(encodeString, (matched) => {
        const formatedCharacter = decode
            ? Object.keys(charactersToReplace).find(
                (key) => charactersToReplace[key] === matched
            )
            : charactersToReplace[matched];
        return formatedCharacter;
    });
    document.getElementById("outputdecrypt").innerHTML = formatedString;
    result.textContent = decode ? "Mensaje desencriptado: " : "Mensaje encriptado: "; 
}

function copyText() {
    navigator.clipboard.writeText(mensaje.textContent)
    //mensaje.value = "";
    alert("Texto Copiado") 
}

function hideTextAndImages() {
    munieco.style.display = "none";
    h3.style.display = "none";
    parrafo.style.display = "none";
    //seccion2.style.background = "#f3f5fc";
}