import axios from 'axios'
import { crearServidor } from '../../../src/compartidos/servidor/servidor.js'
import { crearBuscador } from "../../../src/libros/apis/buscadorDeLibros.js";


const idUsuario = 3
const resultado = await crearBuscador().libroPorAutor("ISAAC ASIMOV")
const libroEjemplo = resultado[0]


const servidor = crearServidor()
await servidor.conectar(3000)
try{

    const {data} = await axios.post(`http://localhost:3000/api/Usuarios/infoLibroPdfMail/${idUsuario}`, libroEjemplo)
    console.log("Mensaje devuelto: ", data)

}catch(err){
        console.log("MENSAJE de ERROR devuelto:", err.response.data)

}
    

const serv = await servidor.desconectar()
