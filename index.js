// evita que se actualize el formulario textarea por defecto
const form = document.getElementById("box");
form.addEventListener("submit", function(e){
    e.preventDefault();
    }
)

function encrypt() {
    const input = document.getElementById('text');
    const output = document.getElementById('show-text');
    
    textoInicial = input.value;
    // Expresion regular que permite solo letras minusculas con un o mas espacios
    const regex = /^\s*[a-z]+(\s+[a-z]+)*\s*$/;     

    switch (true) {
        case (textoInicial.length == 0):
            Swal.fire('Digite su mensaje.');
            break;
        case (!regex.test(textoInicial)):
            Swal.fire('Mensaje inválido, solo se permite letras minúsculas y sin acentos.');
            break;
        default:
            document.getElementById("hide").style.display = "none";
            document.getElementById("myButton").style.display = "block";
            let textoEncriptado = textoInicial.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat');
            output.value = textoEncriptado;
            document.getElementById("show-text").innerHTML = output.value;
    }
}

function decrypt(){
    const input = document.getElementById('text');
    const output = document.getElementById('show-text');
    textoInicial = input.value;
    // Expresion regular que permite solo letras minusculas con un o mas espacios
    const regex = /^\s*[a-z]+(\s+[a-z]+)*\s*$/;     

    switch (true) {
        case (textoInicial.length == 0):
            Swal.fire('Ingrese su mensaje.');
            break;
        case (!regex.test(textoInicial)):
            Swal.fire('Mensaje inválido, solo se permite letras minúsculas y sin acentos.');
            break;
        default:
            document.getElementById("hide").style.display = "none";
            document.getElementById("myButton").style.display = "block";
            let textoEncriptado = textoInicial.replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u');
            output.value = textoEncriptado;
            document.getElementById("show-text").innerHTML = output.value;
    }
}

function copy(){
    const output = document.getElementById('show-text');
    textoInicial = output.value;
    // Expresion regular que permite solo letras minusculas con un o mas espacios
    const regex = /^\s*[a-z]+(\s+[a-z]+)*\s*$/;  

    switch (true) {
        case (textoInicial.length == 0):
            Swal.fire('Ingrese su mensaje.');
            break;
        case (!regex.test(textoInicial)):
            Swal.fire('Mensaje inválido, solo se permite letras minúsculas y sin acentos.');
            break;
        default:
            navigator.clipboard.writeText(output.value);
            document.getElementById("text").value = "";
    }
}

function updatePage(){
    location.reload();
}






