import { CasoDeUso_BusquedaLibroPorAutor } from './cuBuscarLibrosPorAutor.js'
import { crearBuscador } from "../apis/buscadorDeLibros.js";


function crearCUBusquedaPorAutor() {

    const busqueda = new CasoDeUso_BusquedaLibroPorAutor(crearBuscador())
    return busqueda
}

export { crearCUBusquedaPorAutor }