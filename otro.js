window.onload = iniciar;
var personas = [];
function iniciar(){
   var btnAgregar = document.getElementById("btnAgregar");
   btnAgregar.addEventListener("click", clickBtnAgregar);
}

function clickBtnAgregar(){
var nombre = document.getElementById("txtNombre").value;
var apellido = document.getElementById("txtApellido").value;
var telefono = document.getElementById("txtTelefono").value;
var email = document.getElementById("txtEmail").value;

var persona ={
    "nombre": nombre,
    "apellido" : apellido,
    "telefono" : telefono,
    "email" : email
}
personas.push(persona);
mostrarPersonas();

}

function mostrarPersonas(){
    var listado = document.getElementById("listado");
    var html = "";
    for (var persona of personas){
        html += persona.nombre+ " "+ persona.apellido+ " "+ persona.telefono;
    }
    listado.innerHTML = html;
    
}