// Botones Interfaz
const facil = document.getElementById("facil");
const medio = document.getElementById("medio");
const dificil = document.getElementById("dificil");
const selectorDificultad = document.getElementById("SelectorDificultad");
const simonDice = document.getElementById("SimonDice");
const botonReiniciar = document.getElementById("reiniciar");
const botonEmpezar = document.getElementById("comenzar");

// Botones juego
const verde = document.getElementById("Verde");
const rojo = document.getElementById("Rojo");
const morado = document.getElementById("Morado");
const azul = document.getElementById("Azul");

// Variables de juego
let dificultad = 0; // Asi puedo añadir mas modos, la dificultad se basa en los ms que esta encendido el color 
let orden = []; //1 = verde, 2 = rojo, 3 = morado, 4 = azul
let respuesta = [];
let nivel = 0;



// Opciones de dificultad 
facil.addEventListener("click", ()=>{
    dificultad = 1000;
    pasarPantalla();
})

medio.addEventListener("click", ()=>{
    dificultad = 500;
    pasarPantalla();
})

dificil.addEventListener("click", ()=>{
    dificultad = 250;
    pasarPantalla();
})


// Eventos de la interfaz, pasos de pantalla y reinicio

botonReiniciar.addEventListener("click",()=>{
    window.location.reload();
})

botonReiniciar.addEventListener("click",()=>{
    window.location.reload();
})

const pasarPantalla = () =>{
    selectorDificultad.classList.add("oculto");
    simonDice.classList.remove("oculto");
}

botonEmpezar.addEventListener("click",()=>{
    botonReiniciar.classList.remove("oculto");
    botonEmpezar.classList.add("oculto");
    respuesta = [];
    agnadirColor();
    reproducir();
})


//Eventos de botones de juego
let aciertos = 0;
verde.addEventListener("click" ,()=>{
    respuesta.push(1);
    comprobar(aciertos++)

})
rojo.addEventListener("click" ,()=>{
    respuesta.push(2);
    comprobar(aciertos++)

})
morado.addEventListener("click" ,()=>{
    respuesta.push(3);
    comprobar(aciertos++)

})
azul.addEventListener("click" ,()=>{
    respuesta.push(4);
    comprobar(aciertos++);

})

const agnadirColor = () =>{
    //añado un color aleatorio a la lista
    orden.push(Math.floor(Math.random() * 4) + 1);
    aciertos = 0;
    respuesta=[];
    nivel++;
}

const reproducir = () =>{
    // con un for(i) en lugar de un for each puedo usar el indice para la multiplicacion del tiempo
    for (let index = 0; index < orden.length; index++) {
        switch (orden[index]) {
            case 1:
                pulsarcolor(verde,index);
                break;

            case 2:
                pulsarcolor(rojo,index);
                break;

            case 3:
                pulsarcolor(morado,index); 
                break;

            case 4:
                pulsarcolor(azul,index);
                break;

            default:
                break;
        }
        
    }
}

const pulsarcolor = (boton, tiempo) =>{


    setTimeout(() => {boton.classList.add("marcado"); }, dificultad*tiempo);
    
    setTimeout(() => {boton.classList.remove("marcado");}, dificultad*tiempo+dificultad-100);
    /*
     Esto es un poco idea feliz, pero es la unica forma que se me ha ocurrido para poder hacer el delay de los colores sin que 
     explote el navegador
     Lo que hago es un timeout progresivo, ya que la ejecucion es multihilo, si no lo hago asi me aparecerian todos los colores a la vez
     Asi que asi aunque todos los timeouts se ejecuten a la vez, sigue siendo como quiero que sea
     */
}


const comprobar = (pos) =>{
    // Comprobamos si el color coincide con el que deberia, en caso de que coincida, añadimos un color y reproducimos la secuencia

    if(respuesta[pos] === orden[pos]){
        if(pos+1 === orden.length){
            agnadirColor();
            reproducir();   
        }
    }else{
        alert(`Has perdido, has aguantado ${nivel} colores`)
        window.location.reload();
        console.log(respuesta);
        console.log(orden);
    }

}