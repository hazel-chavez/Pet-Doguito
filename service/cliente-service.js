
const listaClientes = () => 
 fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

 //aca el servidor recibe los valores
/**
 * La función `crearNuevoCliente` envía una solicitud POST a un servidor local con los parámetros
 * proporcionados `nombre` y `email`.
 * @param nombre - El parámetro "nombre" representa el nombre del nuevo cliente que desea crear. Es un
 * valor de cadena.
 * @param email - El parámetro `email` es una cadena que representa la dirección de correo electrónico
 * del nuevo cliente.
 */
 const crearNuevoCliente = (nombre,email,) =>{
    fetch("http://localhost:3000/perfil",{
     method: "POST",
     headers: {
        "Content-Type": "application/json"
     },
     body:  JSON.stringify({nombre,email, id: uuid.v4()}),
     
    });
 };

 /**
  * La función `eliminarCliente` se utiliza para eliminar un cliente enviando una solicitud DELETE a
  * una URL específica.
  * @param id - El parámetro `id` representa el identificador único del cliente que desea eliminar del
  * servidor.
  */
 const eliminarCliente = (id) => {
   console.log("Eliminar a => ", id);
   fetch(`http://localhost:3000/perfil/${id}`, {
      method: "DELETE",//EN ESTE CASO NO IMPORTA HEADER Y BODY PORQUE NO ENVIAMOS INFORMACION
   });
 }

 /**
  * La función `detalleCliente` es una función asíncrona que obtiene datos de una URL específica y
  * devuelve la respuesta como un objeto JSON.
  * @param id - El parámetro `id` es el identificador del cliente del que queremos recuperar los
  * detalles.
  * @returns La función `detalleCliente` está devolviendo una promesa que se resuelve en la respuesta
  * JSON de la solicitud de búsqueda.
  */
 const detalleCliente = async (id) => {
   const respuesta = await fetch(`http://localhost:3000/perfil/${id}`);
    return await respuesta.json();
 }

/**
 * La función `actualizarCliente` es una función asíncrona que envía una solicitud PUT para actualizar
 * el perfil de un cliente con el nombre, correo electrónico e identificación proporcionados.
 * @param nombre - El parámetro `nombre` representa el nombre actualizado del cliente.
 * @param email - El parámetro `email` es la nueva dirección de correo electrónico que desea actualizar
 * para el cliente.
 * @param id - El parámetro `id` es el identificador único del cliente que desea actualizar. Se utiliza
 * para especificar qué perfil de cliente se debe actualizar.
 * @returns La función no devuelve nada.
 */
 const actualizarCliente = async (nombre, email, id) => {
   try {
       const respuesta = await fetch(`http://localhost:3000/perfil/${id}`, {
          method: "PUT",
          headers: {
             "Content-Type": "application/json"
          },
          body: JSON.stringify({ nombre, email, id }),
       });
      //  return respuesta;
    } catch (err) {
       return console.log(err);
    }
}
export const clienteServices = {//exportando
  listaClientes,
  crearNuevoCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
}










 //ejemplo para que se ejecute una peticion tras otras
    //const http2 = new XMLHttpRequest();
    //http2.open("GET","http://localhost:3000/perfil/hoy");

   //http2.send();http.onload = () => {
    // const data2 = JSON.parse(http.response);//data es un arreglo recibe codigo js transformando con parse
    // console.log(data);
    // data2.forEach((perfil ) => {//arreglo metodo foreach
    //     const nuevaLinea2 = crearNuevaLinea(perfil.nombre,perfil.email);
    //     table.appendChild(nuevaLinea);//agregamos a nuestra tabla
    // });

//enviamos la peticion
//metodo una vez que cargue y acabe de recibir una respuesta ejecute la peticion

// console.log(http);