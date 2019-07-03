
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
    var btnModificar = document.createElement("input");
    var btnBaja = document.createElement("input");
    var containerDiv = document.getElementById("containerId");
    while (containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.firstChild);
    }
    btnCarga.setAttribute("type", "button");
    //btnCarga.setAttribute("Style","border: none; background-color:blue;");
    btnCarga.setAttribute("value", "Dar Alta a Personaje");
    btnListado.setAttribute("type", "button");
    //btnListago.setAttribute("Style","border: none; background-color:blue;");
    btnListado.setAttribute("value", "Traer Lista Personajes");
    containerDiv.appendChild(btnCarga);
    containerDiv.appendChild(btnListado);
    btnModificar.setAttribute("type", "button");
    //btnCarga.setAttribute("Style","border: none; background-color:blue;");
    btnModificar.setAttribute("value", "Modificar un personaje");
    btnBaja.setAttribute("type", "button");
    //btnListago.setAttribute("Style","border: none; background-color:blue;");
    btnBaja.setAttribute("value", "Dar de baja a personaje");
    containerDiv.appendChild(btnCarga);
    containerDiv.appendChild(btnListado);
    containerDiv.appendChild(btnBaja);
    containerDiv.appendChild(btnModificar);
    btnCarga.addEventListener('click', CrearFormularioAlta, false);
    btnListado.addEventListener('click', MostrarListadoPersonas, false);
    btnBaja.addEventListener('click', CrearFormularioBaja, false);
    btnModificar.addEventListener('click', CrearFormularioModificar, false);

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
    var radioTargaryen = document.createElement("input");
    var radioStark = document.createElement("input");
    var radioLannister = document.createElement("input");
    var checkTraidor = document.createElement("input");
    var btnEnviar = document.createElement("input");
    var btnCancelar = document.createElement("input");
    txtNombre.setAttribute("type", "text");
    txtNombre.setAttribute("name", "Nombre");
    txtApellido.setAttribute("type", "text");
    txtApellido.setAttribute("name", "Apellido");
    txtEdad.setAttribute("type", "text");
    txtEdad.setAttribute("name", "Edad");
    radioStark.setAttribute("type", "radio");
    radioStark.setAttribute("name", "Casa");
    radioTargaryen.setAttribute("type", "radio");
    radioTargaryen.setAttribute("name", "Casa");
    radioLannister.setAttribute("type", "radio");
    radioLannister.setAttribute("name", "Casa");
    radioStark.setAttribute("value", "Stark");
    radioTargaryen.setAttribute("value", "Targaryen");
    radioLannister.setAttribute("value", "Lannister");
    checkTraidor.setAttribute("type", "checkbox");
    checkTraidor.setAttribute("name", "Traidor");
    checkTraidor.setAttribute("value", true|false);
    btnCancelar.setAttribute("type", "button");
    btnCancelar.setAttribute("value", "Cancelar");
    btnEnviar.setAttribute("type", "submit");
    btnEnviar.setAttribute("value", "Enviar");
    
    form.innerHTML += "<p>Nombre: </br></p>"
    form.appendChild(txtNombre);
    form.innerHTML += "<p>Apellido: </br></p>"
    form.appendChild(txtApellido);
    form.innerHTML += "<p>Edad: </br></p>"
    form.appendChild(txtEdad);
    form.innerHTML += "<p>Casa: </br>Stark</p>"
    form.appendChild(radioStark);
    form.innerHTML += "<p></br>Lannister</p>"
    form.appendChild(radioLannister);
    form.innerHTML += "<p></br>Targaryen</p>"
    form.appendChild(radioTargaryen);
    form.innerHTML += "<p></br></br>Traidor: </p>"
    form.appendChild(checkTraidor);
    form.innerHTML += "<p></br></p>"
    form.appendChild(btnCancelar);
    form.appendChild(btnEnviar);
    containerDiv.appendChild(form);

    /* #endregion */
    btnCancelar.addEventListener("click", CrearBotones, false);
    btnEnviar.addEventListener("click", function(e){
    e.preventDefault();
    altaPersona();}, false);

}
function MostrarListadoPersonas() {
    var containerDiv = document.getElementById("containerId");
    while (containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.firstChild);
    }
    var xhr = new XMLHttpRequest();
    var datos 

    xhr.onreadystatechange = function () {
        var espiner = document.createElement("img");
        espiner.setAttribute("src","img/espiner.gif");
        espiner.setAttribute("alt","asdasd");
        espiner.setAttribute("id","espiner")
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                document.getElementById('espiner').remove(espiner);

                ArmarTabla(JSON.parse(xhr.responseText));
            }
            else {
                console.log('Error ' + xhr.statusText);
            }
        }else if(xhr.readyState==1){
            document.getElementById('containerId').appendChild(espiner);
        }
    }
    xhr.open("GET", "http://localhost:3000/traerPersonajes", true);
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
var th3=document.createElement("th");
var th4=document.createElement("th");
var textoHeader3 = document.createTextNode("Edad");
var textoHeader4 = document.createTextNode("Casa");
var th5=document.createElement("th");
var textoHeader5 = document.createTextNode("es Traidor");
var th0=document.createElement("th");
var textoHeader0 = document.createTextNode("ID");
th0.appendChild(textoHeader0);
hilera1.appendChild(th0);
th1.appendChild(textoHeader1);
// Crea las celdas
hilera1.appendChild(th1);
th2.appendChild(textoHeader2);
hilera1.appendChild(th2);
th3.appendChild(textoHeader3);
hilera1.appendChild(th3);
th4.appendChild(textoHeader4);
hilera1.appendChild(th4);
th5.appendChild(textoHeader5);
hilera1.appendChild(th5);
tblBody.appendChild(hilera1);
console.log(personas);
for (var i in personas) {
    // Crea las hileras de la tabla
    var hilera=document.createElement("tr");
        var celda1 = document.createElement("td");
      var textoCelda1 = document.createTextNode(personas[i].id);
      celda1.appendChild(textoCelda1);
      hilera.appendChild(celda1);
      var celda = document.createElement("td");
      var textoCelda = document.createTextNode(personas[i].nombre);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
      var celda2 = document.createElement("td");
      var textoCelda2 = document.createTextNode(personas[i].apellido);
      celda2.appendChild(textoCelda2);
      hilera.appendChild(celda2);
      var celda3 = document.createElement("td");
      var textoCelda3 = document.createTextNode(personas[i].edad);
      celda3.appendChild(textoCelda3);
      hilera.appendChild(celda3);
      var celda4 = document.createElement("td");
      var textoCelda4 = document.createTextNode(personas[i].casa);
      celda4.appendChild(textoCelda4);
      hilera.appendChild(celda4);
      var celda5 = document.createElement("td");
      var textoCelda5 = document.createTextNode(personas[i].traidor);
      celda5.appendChild(textoCelda5);
      hilera.appendChild(celda5);
      tblBody.appendChild(hilera);
    
}

tabla.appendChild(tblBody);
div.appendChild(tabla);
var btnCancelar = document.createElement("input");

btnCancelar.setAttribute("type", "button");
    btnCancelar.setAttribute("value", "Cancelar");
    div.appendChild(btnCancelar);
btnCancelar.addEventListener("click", CrearBotones, false);
/* #endregion */


}




function altaPersona() {
    var form = document.getElementsByTagName("form")[0];
    var Nombre = form.firstElementChild.nextElementSibling;
    var apellido = Nombre.nextElementSibling.nextElementSibling;
    var edad = apellido.nextElementSibling.nextElementSibling.value;
    var casa;
    for (let index = 0; index < document.getElementsByName("Casa").length ; index++) {
        if (document.getElementsByName("Casa")[index].checked) {
            casa=document.getElementsByName("Casa")[index];
            console.log("es traidor");
        }        
    }
    var traidor=document.getElementsByName("Traidor")[0];


    var xhr = new XMLHttpRequest();
    var datos = "nombre=" + encodeURIComponent(Nombre.value) + "&apellido=" + encodeURIComponent(apellido.value)+"&edad="+encodeURIComponent(edad)+"&casa="+encodeURIComponent(casa.value)+"&traidor="+encodeURIComponent(traidor.checked);

    xhr.onreadystatechange = function () {
        var espiner = document.createElement("img");
        espiner.setAttribute("src","img/espiner.gif");
        espiner.setAttribute("alt","asdasd");
        espiner.setAttribute("id","espiner")

        if (xhr.readyState == 4) {
            
            if (xhr.status == 200) {
                alert(xhr.responseText);
                CrearBotones();
                document.getElementById("espiner").remove;
            }
            else {
                console.log('Error ' + xhr.statusText);
                document.getElementById("espiner").remove;

            }
        }else if(xhr.readyState==1){
            document.getElementById('containerId').appendChild(espiner);
        }
    }
    xhr.open("POST", "http://localhost:3000/altaPersonaje", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(datos);
}

function CrearFormularioBaja(){
    var containerDiv = document.getElementById("containerId");
    while (containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.firstChild);
    }
    /* #region  Creando el form y metiendolo */
    var form = document.createElement("form");
    var txtId = document.createElement("input");
    var btnEnviar = document.createElement("input");
    var btnCancelar = document.createElement("input");
    txtId.setAttribute("type", "text");
    txtId.setAttribute("name", "Id");
    btnCancelar.setAttribute("type", "button");
    btnCancelar.setAttribute("value", "Cancelar");
    btnEnviar.setAttribute("type", "submit");
    btnEnviar.setAttribute("value", "Enviar");
    
    form.innerHTML += "<p>Id a borrar: </br></p>"
    form.appendChild(txtId);
    form.appendChild(btnCancelar);
    form.appendChild(btnEnviar);
    containerDiv.appendChild(form);

    /* #endregion */
    btnCancelar.addEventListener("click", CrearBotones, false);
    btnEnviar.addEventListener("click", function(e){
    e.preventDefault();
    bajaPersona();}, false);

}


function bajaPersona(){
    var form = document.getElementsByTagName("form")[0];
    var Id = form.firstElementChild.nextElementSibling.value;
    console.log(Id);


    var xhr = new XMLHttpRequest();
    var datos = "id=" + encodeURIComponent(Id);
    xhr.onreadystatechange = function () {
        var espiner = document.createElement("img");
        espiner.setAttribute("src","img/espiner.gif");
        espiner.setAttribute("alt","asdasd");
        espiner.setAttribute("id","espiner")

        if (xhr.readyState == 4) {
            
            if (xhr.status == 200) {
                alert(xhr.responseText);
                CrearBotones();
            }
            else {
                console.log('Error ' + xhr.statusText);
            }
        }else if(xhr.readyState==1){
            document.getElementById('containerId').appendChild(espiner);
        }
    }
    xhr.open("POST", "http://localhost:3000/bajaPersonaje", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(datos);



}

function CrearFormularioModificar() {
    var containerDiv = document.getElementById("containerId");
    while (containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.firstChild);
    }
    /* #region  Creando el form y metiendolo */
    var form = document.createElement("form");
    var txtId = document.createElement("input");
    txtId.setAttribute("type", "text");
    txtId.setAttribute("name", "Id");
    var txtNombre = document.createElement("input");
    var txtApellido = document.createElement("input");
    var txtEdad = document.createElement("input");
    var radioTargaryen = document.createElement("input");
    var radioStark = document.createElement("input");
    var radioLannister = document.createElement("input");
    var checkTraidor = document.createElement("input");
    var btnEnviar = document.createElement("input");
    var btnCancelar = document.createElement("input");
    txtNombre.setAttribute("type", "text");
    txtNombre.setAttribute("name", "Nombre");
    txtApellido.setAttribute("type", "text");
    txtApellido.setAttribute("name", "Apellido");
    txtEdad.setAttribute("type", "text");
    txtEdad.setAttribute("name", "Edad");
    radioStark.setAttribute("type", "radio");
    radioStark.setAttribute("name", "Casa");
    radioTargaryen.setAttribute("type", "radio");
    radioTargaryen.setAttribute("name", "Casa");
    radioLannister.setAttribute("type", "radio");
    radioLannister.setAttribute("name", "Casa");
    radioStark.setAttribute("value", "Stark");
    radioTargaryen.setAttribute("value", "Targaryen");
    radioLannister.setAttribute("value", "Lannister");
    checkTraidor.setAttribute("type", "checkbox");
    checkTraidor.setAttribute("name", "Traidor");
    checkTraidor.setAttribute("value", true|false);
    btnCancelar.setAttribute("type", "button");
    btnCancelar.setAttribute("value", "Cancelar");
    btnEnviar.setAttribute("type", "submit");
    btnEnviar.setAttribute("value", "Enviar");
    form.innerHTML += "<p>Id a modificar: </br></p>"
    form.appendChild(txtId);
    form.innerHTML += "<p>Nombre: </br></p>"
    form.appendChild(txtNombre);
    form.innerHTML += "<p>Apellido: </br></p>"
    form.appendChild(txtApellido);
    form.innerHTML += "<p>Edad: </br></p>"
    form.appendChild(txtEdad);
    form.innerHTML += "<p>Casa: </br>Stark</p>"
    form.appendChild(radioStark);
    form.innerHTML += "<p></br>Lannister</p>"
    form.appendChild(radioLannister);
    form.innerHTML += "<p></br>Targaryen</p>"
    form.appendChild(radioTargaryen);
    form.innerHTML += "<p></br></br>Traidor: </p>"
    form.appendChild(checkTraidor);
    form.innerHTML += "<p></br></p>"
    form.appendChild(btnCancelar);
    form.appendChild(btnEnviar);
    containerDiv.appendChild(form);

    /* #endregion */
    btnCancelar.addEventListener("click", CrearBotones, false);
    btnEnviar.addEventListener("click", function(e){
    e.preventDefault();
    modificarPersona();}, false);

}

function modificarPersona(){
    var form = document.getElementsByTagName("form")[0];
    var id=form.firstElementChild.nextElementSibling;
    var Nombre = id.nextElementSibling.nextElementSibling;
    var apellido = Nombre.nextElementSibling.nextElementSibling;
    var edad = apellido.nextElementSibling.nextElementSibling.value;
    var casa;
    for (let index = 0; index < document.getElementsByName("Casa").length ; index++) {
        if (document.getElementsByName("Casa")[index].checked) {
            casa=document.getElementsByName("Casa")[index];
            console.log("es traidor");
        }        
    }
    var traidor=document.getElementsByName("Traidor")[0];


    var xhr = new XMLHttpRequest();
    var datos = "id="+id.value+"&nombre=" + encodeURIComponent(Nombre.value) + "&apellido=" + encodeURIComponent(apellido.value)+"&edad="+encodeURIComponent(edad)+"&casa="+encodeURIComponent(casa.value)+"&traidor="+encodeURIComponent(traidor.checked);

    xhr.onreadystatechange = function () {
        var espiner = document.createElement("img");
        espiner.setAttribute("src","img/espiner.gif");
        espiner.setAttribute("alt","asdasd");
        espiner.setAttribute("id","espiner")

        if (xhr.readyState == 4) {
            
            if (xhr.status == 200) {
                alert(xhr.responseText);
                CrearBotones();
                document.getElementById("espiner").remove;
            }
            else {
                console.log('Error ' + xhr.statusText);
                document.getElementById("espiner").remove;

            }
        }else if(xhr.readyState==1){
            document.getElementById('containerId').appendChild(espiner);
        }
    }
    xhr.open("POST", "http://localhost:3000/modificarPersonaje", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(datos);
}



