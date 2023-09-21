class Tarjeta{
    respuesta;
    pregunta;
    puntuacion;

    constructor(respuesta, pregunta){
        this.respuesta = respuesta;
        this.pregunta = pregunta;
        this.puntuacion = 5;

    }
}

/*
Lo unico complicado de este proyecto es crear el algoritmo de repeticion, creo que la parte de leer el json no es gran cosa y que la parte de 
escribirlo tampoco, pero eso ya lo dejare para otro proyecto aparte porque este la verdad que me ha comido el tiempo

Por eso toda esta parte esta desactivada y borrada del menu, no es una version final
*/
const agnadirPregunta = (tarjeta) =>{
    if(!mapaPuntuacionPreguntas.has(tarjeta.puntuacion)){
        mapaPuntuacionPreguntas.set()
    }
}