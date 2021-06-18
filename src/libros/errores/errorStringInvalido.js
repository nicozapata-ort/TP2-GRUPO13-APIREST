function crearErrorStringInvalido(msg){
    const error = new Error(msg)
    error.message = msg
    error.type = 'ERROR_TEXTO_INVALIDO'
    return error
}

export { crearErrorStringInvalido }