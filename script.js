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
           document.getElementById("div_usina").style.display="none"; /* Oculta de entrada la animación*/
                  
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
    mensaje.style.backgroundImage="url('./imagenes/gato.gif')"; // pone la imagen del gato   
    uno.innerHTML = 'Ocultar Backend';} //habilita la posibilidad de sacar la imagen en el mismo boton
        
    
    else {uno.innerHTML = 'Ver Backend';   // en caso contrario quita la imagen  y habilita el boton para Ver la imagen
         mensaje.style.backgroundImage="none";}
  
        }


        let uno = document.getElementById('backend');
        uno.innerHTML = 'Ocultar Backend';
  
        function myFunction() {
            var x = document.getElementById("div_usina");
            var y = document.getElementById("text-area");
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
            document.getElementById("div_usina").innerHTML=valor;
        } 

        function vuelveTextArea(){  // cuando termina la animacion , se muestra el texto encriptado   se oculta la animacion
            var x = document.getElementById("div_usina"); // y se vuleve a mostrar  textArea e informacion
            var y = document.getElementById("text-area");
            var  z = document.getElementById("informacion");
            
            x.style.display = "none";
            y.style.display = "block";
            z.style.display = "block";
     
        }