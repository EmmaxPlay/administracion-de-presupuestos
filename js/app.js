//Variables y selectores
const formulario = document.querySelector("#agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");

//Eventos

eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", preguntarPresupuesto);
}

//Clases
  class Presupuesto{
    constructor(presupuesto){
      this.presupuesto = Number(presupuesto);
      this.restante = Number(presupuesto);
      this.gastos = [];
    }
  }

  class UI {

  }

  let presupuesto;
//Funciones
function preguntarPresupuesto() {
  const presupuestoUsuario = prompt("¿Cúal es tu presupuesto?");
  // console.log(Number(presupuestoUsuario));

  if (
    presupuestoUsuario === "" ||
    presupuestoUsuario === null ||
    presupuestoUsuario === undefined ||
    isNaN(presupuestoUsuario) ||
    presupuestoUsuario <= 0
  ) {
    window.location.reload();
  }

  const presupuesto = new Presupuesto(presupuestoUsuario)
  console.log(presupuesto)
}
