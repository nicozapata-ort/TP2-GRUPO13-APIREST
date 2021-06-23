import {crearServidor  } from "../../../src/compartidos/servidor/servidor.js";
import axios from 'axios'
// import { desconectarMongo } from "../../../src/libros/persistencia/mongo/daoFavoritosMongo.js";

const server = crearServidor()
const port = 3000
try {
    await server.conectar(port)
    const res = await axios.post(`http://localhost:${port}/api/Usuarios/2/Favoritos`, { id_libro: 'x3QQjwEACAAJ' })
    console.log(res.data)
    const serverDisconnect = await server.desconectar()
    // await desconectarMongo()
    if (!serverDisconnect) {
        console.log('Servidor desconectado')
    }
} catch (error) {
    console.log('Error',error.response.data.message)
}
