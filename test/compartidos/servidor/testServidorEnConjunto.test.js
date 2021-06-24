import axios from 'axios'
import { crearServidor } from '../../../src/compartidos/servidor/servidor.js'
import fs from 'fs'
import FormData from 'form-data'
import { cerrarConexion } from '../../../src/libros/persistencia/mongo/clienteMongoCierre.js'

const servidor = crearServidor()
servidor.conectar(3000)

const usuario1 = {
    id: 19,
    nombre: 'diana wei fernandez',
    usuarioEmail: 'dianaweifernandez@gmail.com'
}

const form = new FormData();
const stream = fs.createReadStream('C:/Users/nicol/Desktop/portadasLibros/sherlock.jpg');
form.append('image', stream);
const formHeaders = form.getHeaders();

try {
    const { data: posted } = await axios.post('http://localhost:3000/api/Usuarios/registrarUsuario', usuario1)
    console.log('Posted:', posted)

    const { data: libro } = await axios.post('http://localhost:3000/api/libros', form, { headers: { ...formHeaders } })
    console.log('El libro buscado: ', libro.resultado)

    const { data } = await axios.post(`http://localhost:3000/api/Usuarios/infoLibroPdfMail/${usuario1.id}`, libro.resultado)
    console.log("Mensaje devuelto: ", data)

} catch (error) {
    console.log(error.response.data)
}


await servidor.desconectar()
cerrarConexion().clienteMongo.desconectar()
