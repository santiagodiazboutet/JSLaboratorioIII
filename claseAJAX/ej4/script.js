
window.addEventListener('load',asignarManejadores,false);

function asignarManejadores(){
    document.getElementById("btnGetPersona").addEventListener('click',traerPersona,false);

}

function traerPersona(){
    var txtnombre = document.getElementById("txtNombre");
    var txtapellido = document.getElementById("txtApellido");
    var txtedad = document.getElementById("txtEdad");

    var xhr = new XMLHttpRequest();
    document.getElementById('info').innerHTML = "";

    xhr.onreadystatechange=function(){
        var espiner = document.createElement("img");
           

            document.getElementById('info').appendChild(espiner);
        if(xhr.readyState==4){
            if (xhr.status==200) {
                var coso=JSON.parse(xhr.responseText);
                console.log(coso);
                array.forEach(coso => {
                txtnombre.value+= coso.nombre;
                txtapellido.value+=coso.apellido;
                txtedad.value+=coso.edad);  
                });
                
            }
            else{
                console.log('Error '+xhr.statusText);
            }
        
        
        
        }
    }
    xhr.open("GET","http://localhost:3000/traerPersonas",true);
    xhr.send();
}