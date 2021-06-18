import { validarString } from '../modelos/textoAutor.js'

// historia de usuario:
// como usuario de la app miLibro 
// quiero poder buscar libros ingresando el nombre del autor/a
// para obtener una lista de sus escritos e información de los mismos


class CasoDeUso_BusquedaLibroPorAutor{

    constructor(buscador) {
        this.buscador = buscador
    }
    
    async buscarPorAutor(autor) {
        
        try {

            //validar string nombre autor
            const autorValidado = validarString(autor)

            //matcheo con la api
            const listaLibros = await this.buscador.libroPorAutor(autorValidado)
            
            //devolver resultado no mayor a lista de 10
            console.log(listaLibros)
            return { listaLibros }
        
        } catch (error) {
            console.log(error.message)
        }
    }   
}

export { CasoDeUso_BusquedaLibroPorAutor }