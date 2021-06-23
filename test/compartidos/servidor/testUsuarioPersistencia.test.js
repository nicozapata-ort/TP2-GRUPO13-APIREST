import axios from 'axios'
import { crearServidor } from '../../../src/compartidos/servidor/servidor.js'
// import factoryDaoUsuario from '../../../src/libros/persistencia/factoryDaoUsuario.js'
import {cerrarConexion} from '../../../src/libros/persistencia/cleinteMongoCierre.js'

    const usuarios1 = {
        id: 10,
        nombre: 'locura10',
        usuarioEmail: 'locura10@gmail.com'
    }

    const servidor = crearServidor()
    servidor.conectar(3000)
    
    try{
        const {data: posted} = await axios.post('http://localhost:3000/api/Usuarios/registrarUsuario', usuarios1)
        console.log('Posted:', posted )
    }catch(err){
        console.log("CATCH de AXIOS:", err.response.data)
    }
    await servidor.desconectar()
    // const clienteMongo = await DaoFactory.getClienteMongo()
    // clienteMongo.desconectar('DbUsuarios')  

    console.log(cerrarConexion)
//    const mongocliente = mongoDesconetar()
//    mongocliente.clienteMongo.desconectar()
    cerrarConexion().clienteMongo.desconectar()