function crearErrorTextoImagenInvalido(message){
    const error = new Error(message);
    error.type = "ERROR_TEXTO_IMAGEN_INVALIDO"

    return error
}

export {crearErrorTextoImagenInvalido}