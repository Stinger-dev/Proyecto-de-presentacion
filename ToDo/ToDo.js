const campoTexto = document.getElementById("campoTexto");
const botonAgnadir = document.getElementById("agnadir");
const listaPendientes = document.getElementById("listaPendientes");
const listaTerminadas = document.getElementById("listaTerminadas");


campoTexto.addEventListener("keypress", (tecla)=>{
    if (tecla.key === "Enter") {
        botonAgnadir.click();
      }
})

botonAgnadir.addEventListener("click", ()=>{

    if(campoTexto.value !== "" ){ //asi compruebo si existe o no la tarea en todo el documento :)

        if(document.getElementById(campoTexto.value) == null){
        listaTareas.push(new Tarea(campoTexto.value, false)); 
        }else{
        alert("Ya existe esa tarea")
        }
    }
    campoTexto.value = ""; //Pare resetar el campo
})  


let listaTareas=[];

class Tarea{
    texto;
    resuelta;

    constructor(texto, resuelta){
        this.texto = texto;
        this.resuelta = resuelta;
        this.resuelta? this.agnadirResuelta(this.texto) : this.agnadirTarea(this.texto);

        document.getElementById(this.texto).addEventListener("click", ()=>{
            this.borrarHtml(this.texto, this.resuelta)

        })
    }

    agnadirTarea(texto){
        listaPendientes.insertAdjacentHTML('beforeend',`<li id="${texto}"><input type="checkbox" >${texto}</li>`);
    }

    agnadirResuelta(texto){
        listaTerminadas.insertAdjacentHTML('beforeend',`<li id="${texto}" class="resuelta" ><input type="checkbox" checked = true >${texto}</li>`);
    }

    borrarHtml(texto,resuelta){
        resuelta ? listaTerminadas.removeChild(document.getElementById(texto)) :  listaPendientes.removeChild(document.getElementById(texto));
        
        listaTareas.push(new Tarea(texto,!resuelta));
        listaTareas = listaTareas.filter(entrada => entrada.texto !== this.texto && entrada.resuelta == this.resuelta);
    }
}