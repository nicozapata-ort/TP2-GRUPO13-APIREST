import { crearServidor } from '../../../src/compartidos/servidor/servidor.js'
import axios from 'axios'

const servidor = crearServidor()

const port = 3000

await servidor.conectar(port)

const autor = 'J. K. Rowling'

const { data: resultado } = await axios.get(`http://localhost:${port}/api/libros/porAutor`,{params:{autor}})

console.log(resultado)

await servidor.desconectar()