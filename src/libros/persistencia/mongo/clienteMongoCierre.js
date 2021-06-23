import DaoFactory from '../factoryDaoUsuario.js'

function cerrarConexion(){
    const clienteMongo = DaoFactory.getClienteMongo()
    return{
        clienteMongo
    }
}
 
export  {
    cerrarConexion
}



