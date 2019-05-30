/*function Saludar() {
    //document.write("<h1>Hola Mundo</h1>");
    //document.getElementById("p1").innerHTML="<h1>Hola Mundo</h1>";
   /* 
    var cad = new String();
    var x=11;
    var y=1.54;
    
    var array =[];
    var object ={  nombre: "Juan",edad:34  };
    var fecha =new Date();
    var f = function sumar(){
        return 5;

    }
    var variable=null;
    console.log(typeof variable);

}


var unaFuncion=new Function("a", "b","return a+b");


(function (nombre){

    alert("Hola " +  nombre);

})('Julio');


alert(unaFuncion(4,5));



function x(){
    
    console.log(arguments);
    //return a*b;
}
x(23,"juan",true);



function Persona (nombre, apellido , edad){
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
}

var p1 = new Persona ("Santiago", "Diaz", 24);

console.log(p1.nombre);

console.log(p1["apellido"]);

for(propiedad in p1){
    console.log(p1[propiedad]);
}
Persona.prototype.localidad="Avellaneda";
for(propiedad in p1){
    console.log(p1[propiedad]);
}
*/
var parrafo;

addEventListener("load",asignarManejadores,false);

function asignarManejadores(){

    parrafo=document.getElementById("p1");
    parrafo.addEventListener('click',cambiarTexto,);


}






function cambiarTexto(aQuien){




    aQuien.target.innerHTML='Otro Texto';


}
