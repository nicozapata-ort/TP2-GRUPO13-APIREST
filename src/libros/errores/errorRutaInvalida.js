function crearErrorRutaInvalida(message){
    const error = new Error(message);
    error.type = "ERROR_RUTA_INVALIDA"

    return error
}

export {crearErrorRutaInvalida}