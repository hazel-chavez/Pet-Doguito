import { clienteServices } from "../service/cliente-service.js";

console.log(clienteServices);

//backsticks
const crearNuevaLinea = (nombre,email,id) => {
    const linea = document.createElement("tr");//crear tr de tabla
  const contenido =  `
    <td class="td" data-td>${nombre}</td>
    <td>${email}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            // href="../screens/editar_cliente.html?id=${id}" <!--podemos ver el detalle del cliente
            class="simple-button simple-button--edit"
            >Editar</a
          >
        </li>
        <li>
          <button
            class="simple-button simple-button--delete"
            type="button" id="${id}">
            Eliminar
          </button>
        </li>
      </ul>
    </td>
`;
linea.innerHTML = contenido;//ser codigo html
const btn = linea.querySelector("button");//agregamos a linea el button del dom
btn.addEventListener("click", () => {
  const id = btn.id;
   clienteServices.eliminarCliente(id).then((respuesta) => {
    console.log(respuesta);
   })
   .catch(err => alert("Ocurrio un error"));
});

return linea;
};

const table = document.querySelector("[data-table]");//recorra el arbol de la tabla

//response sale se convierte en data luego que sale de nuestra promesa ejecuta esta accion
clienteServices.listaClientes()
.then((data) => {//recibe la informacion ingresada
  data.forEach(({nombre,email,id}) => {//arreglo metodo foreach
    const nuevaLinea = crearNuevaLinea(nombre,email,id);
    table.appendChild(nuevaLinea);//agregamos a nuestra tabla
  });
})
.catch((error) => alert("Ocurrio un error"));





//nuestro objecto recibe el metodo y la url
//C: CREATE
//R: READ
//U: UDPTADE
//D: DELETE