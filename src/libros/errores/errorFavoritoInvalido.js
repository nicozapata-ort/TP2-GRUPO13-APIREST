function crearErrorFavoritoInvalido(msg){
    const error = new Error(msg)
    error.message = msg
    error.type = 'ERROR_FAVORITO_INVALIDO'
    return error
}

export { crearErrorFavoritoInvalido }