// Botones para bajar y subir las horas y marcador
const masHoras = document.getElementById("mashoras");
const menosHoras = document.getElementById("menoshoras");
const marcadorHoras = document.getElementById("marcadorHoras");

//Botones para subir y bajar los minutos y marcador
const masMinutos = document.getElementById("masminutos");
const menosMinutos = document.getElementById("menosminutos");
const marcadorMinutos= document.getElementById("marcadorMinutos")

//Botones para subir y bajar los segundos y marcador
const masSegundos = document.getElementById("massegundos");
const menosSegundos = document.getElementById("menossegundos");
const marcadorSegundos = document.getElementById("marcadorSegundos")

//Botones de control
const botonEmpezar = document.getElementById("empezar");
const botonParar = document.getElementById("parar");
const botonReiniciar = document.getElementById("reiniciar");
const audio = document.getElementById("alarma");
audio.volume = 1;


//Subir marcador
masHoras.addEventListener("click",()=>{
    sumarHora();
})

masMinutos.addEventListener("click",()=>{
    sumarMinuto();
})

masSegundos.addEventListener("click",()=>{
    sumarSegundo();
})
    
const sumarHora = () =>{
    if (marcadorHoras.textContent<99) {
        marcadorHoras.textContent++;
    }else{
        marcadorHoras.textContent = 0;
    }
}
const sumarMinuto = () =>{
    if (marcadorMinutos.textContent<59) {
        marcadorMinutos.textContent++;        
    }else{
        marcadorMinutos.textContent = 0;
    }
}
const sumarSegundo = () =>{
    if (marcadorSegundos.textContent<59) {
        marcadorSegundos.textContent++;        
    }else{
        marcadorSegundos.textContent = 0;
    }
}



// Bajar marcador
menosHoras.addEventListener("click",()=>{
    restarHora();
})

menosMinutos.addEventListener("click",()=>{
    restarMinuto();
})

menosSegundos.addEventListener("click",()=>{
    restarSegundo();
})

const restarHora = () => {
    if(marcadorHoras.textContent>0){
        marcadorHoras.textContent--;
    }else{
        marcadorHoras.textContent = 99
    }
}
const restarMinuto =() => {
    if(marcadorMinutos.textContent>0){
        marcadorMinutos.textContent--;
    }else{
        marcadorMinutos.textContent = 59
    }
}

const restarSegundo =() => {
    if (marcadorSegundos.textContent>0) {
        marcadorSegundos.textContent--;        
    }else{
        marcadorSegundos.textContent = 59;
    }
}


//Funciones para la cuenta atras y botones
let crono;

botonEmpezar.addEventListener("click", () => {
    empezar();
})

botonParar.addEventListener("click", () => {
    parar();
})

botonReiniciar.addEventListener("click", ()=>{
    window.location.reload(); //Honestamente no me termina de gustar este metodo, pero es bastante rapido de programar
})

const empezar = ()=>{
    if(marcadorSegundos.textContent != 0  || marcadorHoras.textContent != 0 || marcadorMinutos.textContent != 0){
        crono = setInterval(() =>{cuentaAtras();},1000);
        botonEmpezar.classList.add("oculto")
        botonParar.classList.remove("oculto");
        audio.pause();         
        audio.currentTime = 0;
    }
}
const parar = ()=>{
    clearInterval(crono);
    botonParar.classList.add("oculto");
    botonEmpezar.classList.remove("oculto");
    if(marcadorSegundos.textContent == 0  && marcadorHoras.textContent == 0 && marcadorMinutos.textContent == 0){
        audio.play();
    }


}


const cuentaAtras = () =>{
    restarSegundo();
    if((marcadorMinutos.textContent == 0  && marcadorHoras.textContent == 0 && marcadorSegundos.textContent == 0 )){
        parar();
    }

    if((marcadorMinutos.textContent != 0  || marcadorHoras.textContent != 0 ) && marcadorSegundos.textContent == 59){
        restarMinuto();
        if (marcadorHoras.textContent != 0 && marcadorMinutos.textContent == 59) {
            restarHora();
        }
    }
}


