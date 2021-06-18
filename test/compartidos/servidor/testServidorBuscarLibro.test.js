import axios from 'axios'
import {crearServidor} from '../../../src/compartidos/servidor/servidor.js'


const servidor = crearServidor()

await servidor.conectar(3000)

const rutaImagen = 'D:/ORT/2do año/TP2/refactorizacion/casoDeUso_Factory/src/compartidos/assets/alquimista3.jpg'

const { data: resultado } = await axios.post('http://localhost:3000/api/libros', { datoRutaImagen: rutaImagen })

console.log(resultado)

await servidor.desconectar()