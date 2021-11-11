const form = document.querySelector('#formulario');
const renderPresu = document.querySelector('#presupuesto-definido')
const botones = document.querySelector('#botones');
const input = document.querySelector('#data');

let presuInicial = "";

const guardarPresu = (presupuesto) => {
    localStorage.setItem("presupuesto", presupuesto);
  }

const renderPresupuesto = ({target}) => {
    if (target.nodeName !== "INPUT") {
        return;
    }
    presuInicial = target.value;
    renderPresu.innerText = presuInicial;
    guardarPresu(presuInicial);
}

const storePresu = ({target}) => {
    if (target.innerText == 'Diarios') {
        guardarPresu(presuInicial/30);
        presuInicial = "";
    };
    if (target.innerText == 'Semanales') {
        guardarPresu(presuInicial/4);
        presuInicial = "";
    };
    if (target.innerText == 'Mensuales') {
        guardarPresu(presuInicial/1);
        presuInicial = "";
    }
}

form.addEventListener('input', renderPresupuesto);
botones.addEventListener('click', storePresu)
window.onload = () => {
    input.value = 0;
}