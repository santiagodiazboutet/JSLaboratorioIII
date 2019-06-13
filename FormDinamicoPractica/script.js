
window.addEventListener('load', function () {
    var containerDiv = document.createElement("div");
    containerDiv.setAttribute("id", "containerId");
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(containerDiv);
    this.console.log("llego");

    CrearBotones();
}, false);

function CrearBotones() {
    var btnCarga = document.createElement("input");
    var btnListado = document.createElement("input");
    var containerDiv = document.getElementById("containerId");
    while (containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.firstChild);
    }
    btnCarga.setAttribute("type", "button");
    //btnCarga.setAttribute("Style","border: none; background-color:blue;");
    btnCarga.setAttribute("value", "Dar Alta a Persona");
    btnListado.setAttribute("type", "button");
    //btnListago.setAttribute("Style","border: none; background-color:blue;");
    btnListado.setAttribute("value", "Traer Lista Personas");
    containerDiv.appendChild(btnCarga);
    containerDiv.appendChild(btnListado);
    btnCarga.addEventListener('click', CrearFormularioAlta, false);
    btnListado.addEventListener('click', MostrarListadoPersonas, false);
}

function CrearFormularioAlta() {
    var containerDiv = document.getElementById("containerId");
    while (containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.firstChild);
    }
    /* #region  Creando el form y metiendolo */
    var form = document.createElement("form");
    var txtNombre = document.createElement("input");
    var txtApellido = document.createElement("input");
    var txtEdad = document.createElement("input");
    var btnEnviar = document.createElement("input");
    var btnCancelar = document.createElement("input");
    txtNombre.setAttribute("type", "text");
    txtNombre.setAttribute("name", "Nombre");
    txtApellido.setAttribute("type", "text");
    txtApellido.setAttribute("name", "Apellido");
    txtEdad.setAttribute("type", "text");
    txtEdad.setAttribute("name", "Edad");
    btnCancelar.setAttribute("type", "button");
    btnCancelar.setAttribute("value", "Cancelar");
    btnEnviar.setAttribute("type", "button");
    btnEnviar.setAttribute("value", "Enviar");
    form.innerHTML += "<p>Nombre: </br></p>"
    form.appendChild(txtNombre);
    form.innerHTML += "<p>Apellido: </br></p>"
    form.appendChild(txtApellido);
    form.innerHTML += "<p>Edad: </br></p>"
    form.appendChild(txtEdad);
    form.innerHTML += "<p></br></p>"
    form.appendChild(btnCancelar);
    form.appendChild(btnEnviar);
    containerDiv.appendChild(form);

    /* #endregion */
    btnCancelar.addEventListener("click", CrearBotones, false);
    btnEnviar.addEventListener("click", altaPersona, false);

}
function MostrarListadoPersonas() {
    var containerDiv = document.getElementById("containerId");
    while (containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.firstChild);
    }
    var xhr = new XMLHttpRequest();
    var datos 

    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                ArmarTabla(JSON.parse(xhr.responseText));
            }
            else {
                console.log('Error ' + xhr.statusText);
            }
        }
    }
    xhr.open("GET", "http://localhost:3000/traerPersonas", true);
    xhr.send();



}
function ArmarTabla(personas){

/* #region   rmar una tabla*/
var div = document.getElementById("containerId");
var tabla = document.createElement("table");
var tblBody = document.createElement("tbody");
var hilera1=document.createElement("tr");
var th1=document.createElement("th");
var th2=document.createElement("th");
var textoHeader1 = document.createTextNode("Nombre");
var textoHeader2 = document.createTextNode("Apellido");
th1.appendChild(textoHeader1);
// Crea las celdas
hilera1.appendChild(th1);
th2.appendChild(textoHeader2);
hilera1.appendChild(th2);

tblBody.appendChild(hilera1);
console.log(personas);
for (var i in personas) {
    // Crea las hileras de la tabla
    var hilera=document.createElement("tr");
    
      var celda = document.createElement("td");
      var textoCelda = document.createTextNode(personas[i].first_name);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
      var celda2 = document.createElement("td");
      var textoCelda2 = document.createTextNode(personas[i].last_name);
      celda2.appendChild(textoCelda2);
      hilera.appendChild(celda2);
      tblBody.appendChild(hilera);
    
}

tabla.appendChild(tblBody);
div.appendChild(tabla);
/* #endregion */
console.log("hola");




}




function altaPersona() {
    var form = document.getElementsByTagName("form")[0];
    var Nombre = form.firstElementChild.nextElementSibling;
    var apellido = Nombre.nextElementSibling.nextElementSibling;
    var edad = apellido.nextElementSibling.nextElementSibling.value;

    var xhr = new XMLHttpRequest();
    var datos = "nombre=" + encodeURIComponent(Nombre.value) + "&apellido=" + encodeURIComponent(apellido.value);

    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                alert(xhr.responseText);
                CrearBotones();
            }
            else {
                console.log('Error ' + xhr.statusText);
            }
        }
    }
    xhr.open("POST", "http://localhost:3000/altaPersona", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(datos);
}