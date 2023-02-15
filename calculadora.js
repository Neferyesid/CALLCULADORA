
window.onload = function() 
{
    document.querySelector("#sumar").onclick = sumar
    document.querySelector("#restar").onclick = restar
    document.querySelector("#multiplicar").onclick = multiplicar
    document.querySelector("#dividir").onclick = dividir
}


let resul;
function sumar() 
{
    let numUno = document.getElementById("nUno").value
    numDos = document.getElementById("nDos") .value
    resul = parseInt(numUno) + parseInt(numDos);
}

// if (function sumar())  {
    
// }


function restar() 
{
    let numUno = document.getElementById("nUno").value
    numDos = document.getElementById("nDos") .value
    resul = parseInt(numUno) - parseInt(numDos);
}
function multiplicar() 
{
    let numUno = document.getElementById("nUno").value
    numDos = document.getElementById("nDos") .value
    resul = parseInt(numUno) * parseInt(numDos);
}
function dividir() 
{
    let numUno = document.getElementById("nUno").value
    numDos = document.getElementById("nDos") .value
    resul = parseInt(numUno) / parseInt(numDos);
}
function calcularBoton()
{
    document.querySelector("#resul").value=resul
}



const numeros = document.querySelectorAll('.botoNumeros')


