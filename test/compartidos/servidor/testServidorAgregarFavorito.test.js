import {crearServidor  } from "../../../src/compartidos/servidor/servidor.js";
import axios from 'axios'

const server = crearServidor()
const port = 3000
try {
    await server.conectar(port)
    const res = await axios.post(`http://localhost:${port}/api/Usuarios/4/Favoritos`, { id_libro: 'p3QQjwEACAAJ' })
    console.log(res.data)
    const serverDisconnect = await server.desconectar()
    if (!serverDisconnect) {
        console.log('Servidor desconectado')
    }
} catch (error) {
    console.log(error.message)
}
