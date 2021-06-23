import { crearErrorUsuarioNoEncontrado } from '../errores/errorUsuarioNoEncontrado.js'
import { crearUsuarioValido } from '../modelos/usuario.js'

const usuarios = [
    {
        id: 10,
        nombre: 'lee',
        usuarioEmail: 'lee@gmail.com'
    },
    {
        id: 20,
        nombre: 'lee2',
        usuarioEmail: 'lee2@gmail.com'
    },
]


function crearDaoUsuarioCache() {

    return {

        add: (body) => {
            const usuarioValidado = crearUsuarioValido(body) 
            const existe = usuarios.find(u => u.id == usuarioValidado.id) 
            if(existe){    
                return {guardado: 0}
              }else{
                usuarios.push(usuarioValidado)
                return { guardado: 1}
              }
           
        },

        getByUsuarioId: async (id) => {
            const buscado = usuarios.find(e => e.id === Number(id))
            if(buscado){
                return buscado
            }else{
                throw crearErrorUsuarioNoEncontrado("Usuario No Encontrado")
            }
        },

    }
}

export { crearDaoUsuarioCache }