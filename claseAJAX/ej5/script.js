
window.addEventListener('load',asignarManejadores,false);

function asignarManejadores(){
    document.getElementById("btnGetPersona").addEventListener('click',traerPersona,false);

}

function traerPersona(){
    var textoDiv = document.getElementById("info");
    var lista ="";

    var xhr = new XMLHttpRequest();
    document.getElementById('info').innerHTML = "";

    xhr.onreadystatechange=function(){
        var espiner = document.createElement("img");
           

            document.getElementById('info').appendChild(espiner);
        if(xhr.readyState==4){
            if (xhr.status==200) {
                var persona=JSON.parse(xhr.responseText);
                
                for (var i in persona) {

                    document.getElementById('info').innerHTML+="<p>"+personaToString(persona[i])+"</p>";
                }
            }
            else{
                console.log('Error '+xhr.statusText);
            }
        
        
        
        }
    }
    xhr.open("GET","http://localhost:3000/traerPersonas",true);
    xhr.send();
}



function personaToString(persona){
    var cadena="";
for(var prop in persona){
    cadena+='<b>' + prop + ' ' + '</b>' + persona[prop] + ' ';
}
return cadena;
}