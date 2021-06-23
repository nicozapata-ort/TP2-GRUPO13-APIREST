import CUFactoryInfoLibro from '../../../src/libros/negocio/factoryCuInfoLibro.js'
import { crearBuscador } from "../../../src/libros/apis/buscadorDeLibros.js";
import factoryDaoUsuario from '../../../src/libros/persistencia/factoryDaoUsuario.js'


const resultado = await crearBuscador().libroPorAutor("ISAAC ASIMOV")
const libroEjemplo = resultado[0]
const idUsuario = 2

try{
    const CasoDeUso_infoLibroPorMail = CUFactoryInfoLibro.crearCU_enviarInfoLibro()
    await CasoDeUso_infoLibroPorMail.ejecutar(libroEjemplo, idUsuario)
}catch(err){
    console.log("MENSAJE en TEST CASO DE USO:", err.message)
}









const clienteMongo = await factoryDaoUsuario.getClienteMongo()
await clienteMongo.desconectar()