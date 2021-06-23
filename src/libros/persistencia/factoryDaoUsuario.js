import { getMode, getCnxStr } from '../../config.js'

let daoUsuarios
let clienteMongo

switch (getMode()) {
  case 'PROD':
    const { crearClienteMongoDb } = await import('./mongo/clienteMongo.js')
    const { crearDaoUsuarioMongo } = await import('../persistencia/mongo/daoUsuarioMongo.js')
    const cnxStr = getCnxStr()
    clienteMongo = crearClienteMongoDb(cnxStr)
    const dbMongo = await clienteMongo.conectar('DbUsuarios')
    const daoUsuarioMongo = crearDaoUsuarioMongo(dbMongo)
    daoUsuarios = daoUsuarioMongo
    break;
  default:
    const { crearDaoUsuarioCache } = await import('./daoUsuarioCache.js')
    const daoUsuariosCache = crearDaoUsuarioCache()
    daoUsuarios = daoUsuariosCache
    break;
}

function getDaoUsuarios() {
  return daoUsuarios
}

function getClienteMongo() {
    return clienteMongo
}

export default {
    getDaoUsuarios,
    getClienteMongo
}