const procesar = document.getElementById("procesar");
const campoTexto = document.getElementById("campoTexto");
let resultados = document.getElementById("tablaResultados");
const padre = document.getElementById("resultados");


procesar.addEventListener("click", () => {
    let resultado = new Map();
    limpiarTabla();
    let texto = campoTexto.value;
    if(texto.length === 0 ){
        padre.style.display= "none";
        alert("No hay texto para procesar");
    }else{
        for (let k = 0; k < texto.length; k++) {
            let element = texto.charAt(k);
            if(!resultado.has(element)){
                resultado.set(element, 0);
            }
            resultado.set(element, resultado.get(element)+1);     
        }
        padre.style.display= "block";
        resultado.forEach((cantidad, letra) => {
            if(letra==="\n"){
                letra = "Saltos de linea";
            }
            resultados.insertAdjacentHTML('beforeend',`<tr><td>"${letra}" -> </td><td>${cantidad}</td></tr>`);
        });
    }
})

const limpiarTabla=()=>{
    let cantidad = resultados.childElementCount;
    for (let index = 0; index < cantidad; index++) {
        resultados.lastChild.remove(); 
    }
}