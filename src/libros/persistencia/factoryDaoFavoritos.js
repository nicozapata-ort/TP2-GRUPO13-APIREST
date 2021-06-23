import { getMode, getCnxStr } from "../../config.js";

let daoFavoritos
let clienteMongo

switch (getMode()) {
  case 'PROD':
    const { crearClienteMongoDb } = await import('./mongo/clienteMongo.js')
    const { crearDaoFavoritos } = await import('./mongo/daoFavoritosMongo.js')
    const cnxStr = getCnxStr()
    clienteMongo = crearClienteMongoDb(cnxStr)
    const dbMongo = await clienteMongo.conectar('DbFavoritos')
    daoFavoritos = crearDaoFavoritos(dbMongo)
    
    break;
  default:
    const { crearDaoFavoritosCache } = await import('./daoFavoritosCache.js')
    daoFavoritos = crearDaoFavoritosCache()
    
    break;
}

function getDaoFavoritos() {
    return daoFavoritos
}


export default {getDaoFavoritos}

