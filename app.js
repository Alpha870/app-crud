// variables

const formularioUI = document.getElementById("selector");
const listadoUI = document.getElementById("listaRutina");
const submit = document.getElementById("guardar");
let arrayActividades = [];

// Funciones


// Eventos

formularioUI.addEventListener("change", (e) => {
  e.preventDefault();

  const memoria = [];
  let actividadUI = formularioUI.options[formularioUI.selectedIndex].text;
  memoria.push(actividadUI);
  
  
  submit.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(memoria)
    
      

  });
});
