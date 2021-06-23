function crearErrorUsuarioNoEncontrado(msg){
    
    const error = new Error(msg)
    error.message = msg
    error.type = 'ERROR_USUARIO_NO_ENCONTRADO'
    return error
}

export { crearErrorUsuarioNoEncontrado }