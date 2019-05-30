window.addEventListener("load",
    function (){
    var div = document.getElementsByTagName("div")[0];
    var tabla = document.createElement("table");
    var fila = tabla.insertRow();
    var archivo = new XMLHttpRequest();
    archivo.open("GET", "MOCK_DATA.json", true);
    var personas = JSON.parse(archivo.responsetext);
    console.log (personas);

    }
,false);