import { clienteServices } from "../service/cliente-service.js";

const formulario = document.querySelector("[data-form]");


formulario.addEventListener("submit", (evento) => {
   evento.preventDefault();
   const nombre = document.querySelector("[data-nombre]").value;
   const email = document.querySelector("[data-email]").value;
   window.location.href = "../screens/registro_completado.html";
   clienteServices
     .crearNuevoCliente(nombre, email)
     .then(() => { 
     })
     .catch((err) => console.log(err));
 });
 

// formulario.addEventListener("submit", (evento) => {
//  evento.preventDefault(); //previene el comportamiento por defecto del formulario
//   const nombre = document.querySelector("[data-nombre]").value;
//   const email = document.querySelector("[data-email]").value;

//  clienteServices.crearNuevoCliente(nombre,email).then(() => { //recibi funcion  anomima
//     window.location.href = "/screens/registro_completado.html"
//  }).catch((err) => console.log(err));
// });