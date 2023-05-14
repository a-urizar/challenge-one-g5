const textArea=document.querySelector(".text-area");
const mensaje=document.querySelector(".mensaje"); 
/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

/* Pone al Boton VER BACKEND  en su estado inicial(VER BACKEND)*/

    window.onload = function() {
            let uno = document.getElementById('backend');
            uno.innerHTML = 'Ver Backend'; /* Pone al Boton VER BACKEND  en su estado inicial(VER BACKEND)*/
            
        }

    window.onload = function() {
        
        document.getElementById("seccion2").style.display="none";
        document.getElementById('backend').innerHTML="Ver Backend";
        document.getElementById("video2").style.display="none";
      }

      

        /* ENCRIPTACION */


function btnEncriptar(){
    const textoEncriptado=encriptar(textArea.value)
    mensaje.value=textoEncriptado
    textArea.value="";
    mensaje.style.backgroundImage = "none"; /*Al encriptar oculta la imagen de fondo*/ 
    let button=document.getElementById("copiar");
    button.textContent="copiar"; /*Copia el contenido en la variable  button*/
    let uno = document.getElementById('backend');
    uno.innerHTML = 'Ver Backend'; /*asigna al Boton copiar el texto Ver Backend*/
    
    }


function encriptar(stringEncriptada){

    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

stringEncriptada=stringEncriptada.toLowerCase()


for(let  i=0; i<matrizCodigo.length;i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
    }
}

return stringEncriptada
}

/* DESENCRIPTACION */

function btnDesencriptar(){
    const textoEncriptado=desencriptar(textArea.value)
    mensaje.value=textoEncriptado
    textArea.value="";
    let button=document.getElementById("copiar");
    button.textContent="copiar"; 
    mensaje.style.backgroundImage = "none";
    let uno = document.getElementById('backend');
        uno.innerHTML = 'Ver Backend';
}


function desencriptar(stringDesencriptada){

    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    stringDesencriptada=stringDesencriptada.toLowerCase()
    

for(let  i=0; i<matrizCodigo.length;i++){
    if(stringDesencriptada.includes(matrizCodigo[i][1])){
        stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
    }
}
return stringDesencriptada

 }


/*copiar al portapapeles */

function copiar(){
    let portapapeles=document.getElementById("mensaje");
    let button=document.getElementById("copiar");
    navigator.clipboard.writeText(mensaje.value);
    button.textContent="copiado"; /*cambia el texto del boton a Copiado*/
    mensaje.style.backgroundImage = "none"; 
}

function verBackend() {
    var uno = document.getElementById('backend');
    if (uno.innerHTML == 'Ver Backend') { // se fija si el texto del boton esta en (Ver Backend) 
    mensaje.style.backgroundImage="url('imagenes/gato.gif')"; // pone la imagen del gato   
    uno.innerHTML = 'Ocultar Backend';} //habilita la posibilidad de sacar la imagen en el mismo boton
        
    
    
    else {uno.innerHTML = 'Ver Backend';   // en caso contrario quita la imagen  y habilita el boton para Ver la imagen
         mensaje.style.backgroundImage="none";}
  
        }

    function automatizar() {
            var dos = document.getElementById('automatiza');
            if (dos.innerHTML == 'Automatizar') { // se fija si el texto del boton esta en (Ver Backend) 
            mensaje.style.backgroundImage="url('imagenes/computer-drinking.gif')"; // pone la imagen del gato   
            dos.innerHTML = 'Manual';} //habilita la posibilidad de sacar la imagen en el mismo boton
                
            
            
            else {dos.innerHTML = 'Automatizar';   // en caso contrario quita la imagen  y habilita el boton para Ver la imagen
                 mensaje.style.backgroundImage="none";}
          
                }    


        let uno = document.getElementById('backend');
        uno.innerHTML = 'Ocultar Backend';
  
        function myFunction() {
            var x = document.getElementById("seccion2");
            var y = document.getElementById("seccion1");
            var  z = document.getElementById("informacion");
            

            if (x.style.display === "none") { // se fija si la animacion esta desabilitada
                x.style.display = "block"; //la habilita
                y.style.display = "none"; // oculta el textArea y la informacion 
                z.style.display = "none"
                

            } else {
                x.style.display = "none"; // sino  quiere decir que esta habilitada por lo tanto la habilita 
                y.style.display = "block";// y habilita  textArea e información
                z.style.display = "block";
            }

            
        }
        
        

        function mostrar(valor){
            document.getElementById("seccion2").innerHTML=valor;
        } 

        function vuelveTextArea(){  // cuando termina la animacion , se muestra el texto encriptado   se oculta la animacion
            var x = document.getElementById("seccion2"); // y se vuleve a mostrar  textArea e informacion
            var y = document.getElementById("seccion1");
            var  z = document.getElementById("informacion");
            
            x.style.display = "none";
            y.style.display = "block";
            z.style.display = "block";
     
        }

        function advertencia(){
            document.getElementById("boton-panico").style.display="none";
            document.getElementById("info-panico").style.display="none";
            document.getElementById("atencion").style.display="block";
            document.getElementById("luz-roja").style.display="block";
            document.getElementById("boton-naranja").style.display="block";
            document.getElementById("hombre-boton").style.display="block";
            document.getElementById("video2").style.display="none";
        }
        function muestraVideo(){
            document.getElementById("atencion").style.display="none";
            document.getElementById("luz-roja").style.display="none";
            document.getElementById("boton-naranja").style.display="none";
            document.getElementById("hombre-boton").style.display="none";
            document.getElementById("hombre-boton").style.display="none";

            document.getElementById("logo").style.display="none";
            document.getElementById("seccion1").style.display="none";
            document.getElementById("seccion2").style.display="none";
            document.getElementById("seccion3").style.display="none";

            
        
            document.getElementById("video").style.display="block";
            
        }


        function carga() { 
            var video=document.getElementById('video'); 
            var video2=document.getElementById('video2');
            video.load();
            video2.load();    
        } 

            function reproduce() { 
                var video=document.getElementById('video'); 
                video.play();
                video.addEventListener('ended',reproduceFin,false);
                
                /*https://www.eniun.com/control-reproduccion-video-audio-javascript/*/

            }

    function reproduceFin() {
        document.getElementById("video").style.display="none";  
        document.getElementById("video2").style.display="block";
        var video2=document.getElementById('video2'); 
         video2.play();
         video2.addEventListener('ended',cierra,false);

    }          
    //function pantallaNegra(){
    //  document.body.style.backgroundColor = 'black';
    //document.getElementById("fondo-final").style.backgroundColor="black";
    //Window.close()}		       

function cierra(){
    Window.close();
}