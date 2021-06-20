import { crearErrorUsuarioInvalido } from '../errores/errorUsuarioInvalido.js'

function crearUsuarioValido (usuario) {
      const expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
      const esValido = expReg.test(usuario.usuarioEmail)

      if (!esValido && datosMail.destinatario !== "" ){
            throw crearErrorUsuarioInvalido('Usuario es INVALIDO')
      }

      if (!usuario.nombre) {
              throw crearErrorUsuarioInvalido('Usuario es INVALIDO')
      }

      if (!usuario.id) {
            throw crearErrorUsuarioInvalido('Usuario es INVALIDO')
      }
      
        
        return usuario         
}

export { crearUsuarioValido }

        


