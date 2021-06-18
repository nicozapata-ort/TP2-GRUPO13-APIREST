import {crearErrorTextoImagenInvalido} from '../errores/errorTextoImagenInvalido.js'

function crearTextoImagen(datoTextoImagen){

    if(datoTextoImagen === undefined || datoTextoImagen.length === 0){
        throw crearErrorTextoImagenInvalido('El texto proveniente de la imagen analizada es inválido.')
    }

    return datoTextoImagen;
}

export {crearTextoImagen}