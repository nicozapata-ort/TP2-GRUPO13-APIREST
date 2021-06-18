import { crearErrorStringInvalido } from '../errores/errorStringInvalido.js'

function validarString (txt) {
        
        if (txt == "") {
                throw crearErrorStringInvalido('El texto ingresado no puede ser vacio')
        }
        
        return txt         
}

export { validarString }
