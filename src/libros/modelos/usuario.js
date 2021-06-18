import { crearErrorUsuarioInvalido } from '../errores/errorUsuarioInvalido.js'

function validarUsuario (usuario) {
        
        if (usuario === undefined) {

              throw crearErrorUsuarioInvalido('Usuario es INEXISTENTE')
        }
        
        return usuario         
}

export { validarUsuario }

        


