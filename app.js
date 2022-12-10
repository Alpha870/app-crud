// variables
const selector = document.getElementById("selector");
const enviar = document.getElementById("submit");
const lista = document.getElementById("listaRutina")
let arrayActividades = [];

// Funciones
const crearActividad = (ejercicio) => {
  let item = {
    ejercicio: ejercicio,
  };
  arrayActividades.push(item);
  return item;
};

const guardarLS = () => {
  localStorage.setItem("rutina", JSON.stringify(arrayActividades));
};

const imprimirLS = () => {
  listaRutina.innerHTML = '';
}

// Eventos

enviar.addEventListener("click", () => {
  const ejercicio = selector.options[selector.selectedIndex].text;
  crearActividad(ejercicio);
  guardarLS();
});

document.addEventListener("DOMContentLoaded", imprimirLS);
