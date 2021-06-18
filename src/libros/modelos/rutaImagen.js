import fs from 'fs'
import {crearErrorRutaInvalida} from '../errores/errorRutaInvalida.js'

function crearRutaImagen(datoRuta){

    const existe = fs.existsSync(datoRuta);

    console.log(datoRuta)

    if(!existe){
        throw crearErrorRutaInvalida('La ruta ingresada no contiene ningún archivo.')
    }

    return datoRuta
}

export {crearRutaImagen}