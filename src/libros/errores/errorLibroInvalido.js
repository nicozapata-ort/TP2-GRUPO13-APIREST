function crearErrorLibroInvalido(msg){
    
    const error = new Error(msg)
    error.message = msg
    error.type = 'ERROR_LIBRO_NO_ENCONTRADO'
    return error
}

export { crearErrorLibroInvalido }