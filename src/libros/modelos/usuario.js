import { crearErrorUsuarioInvalido } from '../errores/errorUsuarioInvalido.js'

function crearUsuarioValido (usuario) {
     
      const expReg=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
      const esValido = expReg.test(usuario.usuarioEmail)

      if (!esValido){
            console.log("MODELO")
            throw crearErrorUsuarioInvalido('Email ingresado es INVALIDO')
      }

      if (!usuario.usuarioEmail){
            console.log("MODELO")
            throw crearErrorUsuarioInvalido('Email ingresado es Obligatorio')
      }


      if (!usuario.nombre) {
              throw crearErrorUsuarioInvalido('Usuario nombre es INVALIDO')
      }

      if (!usuario.id) {
            throw crearErrorUsuarioInvalido('Usuario id es INVALIDO')
      }
      
 
      return usuario         
}

export { crearUsuarioValido }

        


