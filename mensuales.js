const presuInicial = document.querySelector('#presupuesto-inicial');
const presuGastado = document.querySelector('#presupuesto-gastado');
const presuDisponible = document.querySelector('#presupuesto-disponible');
const alquiler = document.querySelector('#alquiler');
const supermercado = document.querySelector('#supermercado');
const ropa = document.querySelector('#ropa');

let renderPresu = localStorage.getItem("presupuesto")


presuInicial.innerText = renderPresu;

let sumaGastos = [];

const renderGastos = () => {
    let sumaGastos = [Number(alquiler.value)+Number(supermercado.value)+Number(ropa.value)];
    presuGastado.innerText=sumaGastos;
    presuDisponible.innerText = Number(renderPresu)-sumaGastos;
}


alquiler.addEventListener('input', renderGastos);
supermercado.addEventListener('input', renderGastos);
ropa.addEventListener('input', renderGastos);