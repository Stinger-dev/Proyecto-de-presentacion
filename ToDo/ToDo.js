const campoTexto = document.getElementById("campoTexto");
const botonAgnadir = document.getElementById("agnadir");
const listaPendientes = document.getElementById("listaPendientes");
const listaTerminadas = document.getElementById("listaTerminadas");



botonAgnadir.addEventListener("click", ()=>{

    if(document.getElementById(campoTexto.value) == null && campoTexto.value !== "" ){
        new Tarea(campoTexto.value);
        
    }
})






class Tarea{
    texto;
    resuelta;
    etiqueta;

    constructor(texto){
        this.texto = texto;
        this.agnadirTarea(this.texto);
        this.agnadirResuelta(this.texto);
        this.etiqueta = document.getElementById(this.texto);
        this.etiqueta.addEventListener("click", ()=>{
            this.etiqueta.checked = false;
        })
    }

    agnadirTarea(texto){
        listaPendientes.insertAdjacentHTML('beforeend',`<li><input type="checkbox" class="tarea"  " id="${texto}">${texto}</li>`);
    }

    agnadirResuelta(texto){
        listaTerminadas.insertAdjacentHTML('beforeend',`<li><input type="checkbox" class="tarea" checked = true " id="${texto}">${texto}</li>`);
    }


}


