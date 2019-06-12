
window.addEventListener('load',CrearBotones,false);

function CrearBotones(){
    var body = document.getElementsByTagName("body")[0];
    var containerDiv = document.createElement("div");
    var btnCarga = document.createElement("input");
    var btnListado = document.createElement("input");
    btnCarga.setAttribute("type","button");
    //btnCarga.setAttribute("Style","border: none; background-color:blue;");
    btnCarga.setAttribute("value","Dar Alta a Persona");
    btnListado.setAttribute("type","button");
    //btnListago.setAttribute("Style","border: none; background-color:blue;");
    btnListado.setAttribute("value","Traer Lista Personas");
    containerDiv.setAttribute("id","ContainerId");
    containerDiv.appendChild(btnCarga);
    containerDiv.appendChild(btnListado);
    body.appendChild(containerDiv);
    btnCarga.addEventListener('click',CrearFormularioAlta,false);
    btnListado.addEventListener('click',MostrarListadoPersonas,false);
}

function CrearFormularioAlta(){
    var containerDiv=document.getElementById("ContainerId");
    while(containerDiv.firstChild){
        containerDiv.removeChild(containerDiv.firstChild);

    }
}
function MostrarListadoPersonas(){
    var containerDiv=document.getElementById("ContainerId");

}