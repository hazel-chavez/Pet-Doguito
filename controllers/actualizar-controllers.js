import { clienteServices } from "../service/cliente-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id === null) {
    window.location.href = "/screens/error.html";
  }

  const nombre = document.querySelector("[data-nombre]");
  const email = document.querySelector("[data-email]");

  try {
    const perfil = await clienteServices.detalleCliente(id); //maneja el then en await espera la respuesta del servidor y se recibe en perfil
    if (perfil.nombre && perfil.email) {
      nombre.value = perfil.nombre;
      email.value = perfil.email;
    } else {
      throw new Error();
    }
    //throw llamamos a nuestro error
  } catch (error) {
    window.location.href = "/screens/error.html";
  }
};

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  //obtener la informacion
  const nombre = document.querySelector("[data-nombre]").value;
  const email = document.querySelector("[data-email]").value;
  console.log(nombre, "-- ", email);

  clienteServices.actualizarCliente(nombre, email, id).then(() => {
    window.location.href = "/screens/edicion_concluida.html";
  });
});
