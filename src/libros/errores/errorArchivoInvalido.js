function crearErrorArchivoInvalido(message){
    const error = new Error(message);
    error.type = "ERROR_ARCHIVO_INVALIDO"

    return error
}

export {crearErrorArchivoInvalido}