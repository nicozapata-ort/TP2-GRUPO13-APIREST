import DaoFactory from '../persistencia/factoryDaoUsuario.js'

function cu_altaUsuario(){
    
    return{
        cargar: 
        async (datoUsuario) => {      
            try {
                const daoUsuario =  DaoFactory.getDaoUsuarios()
                const {guardado} = await daoUsuario.add(datoUsuario)
                if(!guardado){
                  throw new Error('ya existe un estudiante con ese id')
                }
            } catch(error) {
                throw (error)
            }
        }
    }
} 

export { cu_altaUsuario }