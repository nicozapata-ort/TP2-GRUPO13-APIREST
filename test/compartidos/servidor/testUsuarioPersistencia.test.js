import axios from 'axios'
import { crearServidor } from '../../../src/compartidos/servidor/servidor.js'
// import factoryDaoUsuario from '../../../src/libros/persistencia/factoryDaoUsuario.js'


    const usuarios1 = {
        id: 3,
        nombre: 'cristina fernadez',
        usuarioEmail: 'cristinafernandez@gmail.com'
    }

    const servidor = crearServidor()
    servidor.conectar(3000)
    
    try{
        const {data: posted} = await axios.post('http://localhost:3000/api/Usuarios/registrarUsuario', usuarios1)
        console.log('Posted:', posted )
    }catch(err){
        console.log("AXIOS:", err.response.data)
    }
    await servidor.desconectar()

