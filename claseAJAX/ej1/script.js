function Ejecutar(){
    var xhr= new XMLHttpRequest();
    xhr.onreadystatechange = function (){
        if(xhr.readyState==4){
            console.log(1);
            if (xhr.status==200) {
                document.getElementById('info').innerHTML = xhr.responseText;
                console.log(2);


            }


        }
    };
    xhr.open('GET','http://localhost:3000/lista.txt',true);
    xhr.send();

}



