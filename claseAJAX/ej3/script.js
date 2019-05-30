
window.addEventListener('load',asignarManejadores,false);

function asignarManejadores(){
    document.forms[0].addEventListener('submit',function(e){
        e.preventDefault();
        manejarSubmit();


    },false);

}

function manejarSubmit(){
    var nombre = document.getElementById("txtNombre").value;
    var apellido = document.getElementById("txtApellido").value;
    var datos = "nombre="+ encodeURIComponent(nombre)+"&apellido=" + encodeURIComponent(apellido);
    var xhr = new XMLHttpRequest();
    document.getElementById('info').innerHTML = "";

    xhr.onreadystatechange=function(){
        var espiner = document.createElement("img");
        espiner.setAttribute("src","img/espiner.gif");
        espiner.setAttribute("alt","asdasd");

            document.getElementById('info').appendChild(espiner);
        if(xhr.readyState==4){
            if (xhr.status==200) {
                document.getElementById('info').innerHTML = xhr.responseText;
                
            }
            else{
                console.log('Error '+xhr.statusText);
            }
        }
        else{
            espiner.setAttribute("src","img/espiner.gif");
            espiner.setAttribute("alt","asdasd");
            document.getElementById('info').appendChild(espiner);
            

        }
    }
    xhr.open("POST","http://localhost:3000/enviarDatos",true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
    xhr.send(datos);
}