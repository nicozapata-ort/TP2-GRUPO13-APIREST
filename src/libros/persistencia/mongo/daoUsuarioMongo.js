import { crearErrorUsuarioNoEncontrado } from '../../errores/errorUsuarioNoEncontrado.js'
import { crearUsuarioValido } from '../../modelos/usuario.js'

function crearDaoUsuarioMongo(dbMongo) {

    const db = dbMongo.collection('Usuarios')
    
    return {
     
      add: async (body) => {
        const usuarioValidado = crearUsuarioValido(body)  
        const existe = await db.findOne({id : usuarioValidado.id})
        if(existe){    
          return {guardado: 0}
        }else{
          await db.insertOne(usuarioValidado)
          return { guardado: 1}
        }
      },

      getByUsuarioId: async (id) => {
        const encontrado = await db.findOne({id: Number(id)})
        if(encontrado){
          return encontrado
        }else{
          throw crearErrorUsuarioNoEncontrado("Usuario No Encontrado")
        }
      },
    
    }
  }
  
  export { crearDaoUsuarioMongo}