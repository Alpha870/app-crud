// variables
const selector = document.getElementById("selector");
const enviar = document.getElementById("submit");
const lista = document.getElementById("listaRutina");
let arrayActividades = [];

// Funciones

//Funcion de crear ejercicio
const crearActividad = (ejercicio) => {
  let item = {
    ejercicio: ejercicio,
    estado: "NO REALIZADO ❌",
  };
    arrayActividades.push(item);
  return item;
};

//Funcion maximo listado
const maximo = () => {
  alert('🥵 Hey tendrias que descansar por hoy...')
};

//Funcion de guardar en el localStorage
const guardarLS = () => {
  localStorage.setItem("rutina", JSON.stringify(arrayActividades));
  imprimirLS();
};

//Funcion de imprimir lista
const imprimirLS = () => {
  listaRutina.innerHTML = "";

  arrayActividades = JSON.parse(localStorage.getItem("rutina"));

  if (arrayActividades === null) {
    arrayActividades = [];
  } else {
    arrayActividades.forEach((element) => {
      if (element.estado === "NO REALIZADO ❌") {
        listaRutina.innerHTML += `
      <div class="alert alert-danger mt-3" role="alert" id="divInterno">
      <i class='bx bx-dumbbell float-start me-2' id="pesa"></i>
      <b class="actividad me-3" id="texto-ejercicio">${element.ejercicio}</b>
      <p class= 'realizado'>${element.estado}</p>
      <span class="float-end">
        <i class='bx bx-check'id='check'></i>
        <i class='bx bxs-trash ms-2' id='trash'></i>
      </span>
    </div>`;
      } else {
        listaRutina.innerHTML += `
      <div class="alert alert-success mt-3" role="alert" id="divInterno">
      <i class='bx bx-dumbbell float-start me-2' id="pesa"></i>
      <b class="actividad me-3" id="texto-ejercicio">${element.ejercicio}</b>
      <p class= 'realizado'>${element.estado}</p>
      <span class="float-end">
        <i class='bx bx-check'id='check'></i>
        <i class='bx bxs-trash ms-2' id='trash'></i>
      </span>
    </div>`;
      }
    });
  }
};

//Funcion de eliminar la posicion del localStorage
const eliminarLS = (texto) => {
  let indexArray;

  arrayActividades.forEach((elemento, index) => {
    if (elemento.ejercicio === texto) {
      indexArray = index;
    }
  });
  arrayActividades.splice(indexArray, 1);
  guardarLS();
};

//Funcion de editar
const editarLS = (texto) => {
  let indexArray;

  arrayActividades.forEach((elemento, index) => {
    if (elemento.ejercicio === texto) {
      indexArray = index;
    }
  });
  arrayActividades[indexArray].estado = "REALIZADO ✔";
  guardarLS();
};

// Eventos

// Evento que detecta la seleccion del select con el submit
enviar.addEventListener("click", () => {
  const ejercicio = selector.options[selector.selectedIndex].text;
  //no dejaremos añadir si quiere crear mas de 5 div
  if (arrayActividades.length >= 5) {
    return maximo();

  } else {
  crearActividad(ejercicio);
  guardarLS();
  }
});

document.addEventListener("DOMContentLoaded", imprimirLS);

lista.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.id === "check" || e.target.id === "trash") {
    let texto = e.path[2].childNodes[3].innerHTML;

    if (e.target.id === "trash") {
      //Accion de eliminar
      eliminarLS(texto);
    }
    if (e.target.id === "check") {
      //Accion de editar
      editarLS(texto);
    }
  }
});
