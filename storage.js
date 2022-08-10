window.onload = iniciar;

function iniciar(){
    var btnAgregar= document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", clickBtnAgregar);
    mostrarNotas();
}

function clickBtnAgregar(){
    var txtNota = document.getElementById("txtNota");
    //Aqui se declara arreglo notas 
    var notas=[];
    
    //Si haya algo en local Storage 
    if (localStorage.notas){
    //Se convierte lo que hay en localstorage (string) a arreglo con JSN.parse

        notas=JSON.parse(localStorage.notas);
    }
    notas.push(txtNota.value);
    //Convierte el arreglo como string
    localStorage.notas = JSON.stringify(notas);
    mostrarNotas();

    
}   
function mostrarNotas(){
    
    var divNotas = document.getElementById("divNotas");
    var notas =[];
    //Si haya algo en local Storage 
    if (localStorage.notas){
        notas=JSON.parse(localStorage.notas);
    }
   
    var html = "";
    for(var nota of notas){
        html += nota+ "<br/>";
    }
    divNotas.innerHTML = html;
}
