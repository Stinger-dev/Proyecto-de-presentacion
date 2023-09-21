const marcado = (etiqueta) =>{
    desmarcarTodos();
    const botonContador = document.getElementById(etiqueta);
    botonContador.parentElement.classList.add("seleccionado");
    botonContador.classList.add("seleccionado");

    
}

const desmarcarTodos = () =>{
    let tmpArray = document.getElementsByClassName("seleccionado");
    while (tmpArray.length!=0) {
        tmpArray[0].classList.remove("seleccionado");        
    }
}




