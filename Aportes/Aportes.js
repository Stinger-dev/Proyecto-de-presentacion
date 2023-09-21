const cuerpo = document.getElementById("cuerpo");
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");

const enviarAporte = () => {
    console.log(cuerpo.value);
    window.location=`mailto:gonzalocallejasrojas@gmial?subject=${tipo}&body=Buenas, soy ${nombre.value} ${apellidos.value} %0D%0A Le escribo para notificar el siguiente problema: ${cuerpo.value} ` ;
}
let tipo = 'Otro';

const declararTipo = (texto) => {
    tipo = texto;
}