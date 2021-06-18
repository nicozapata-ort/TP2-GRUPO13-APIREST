import CasoDeUso_BuscarLibro from './cuBuscarLibroPorImagen.js'
import {crearReconocedorDeTexto} from '../apis/reconocedorDeTexto.js'
import {crearBuscador} from '../apis/buscadorDeLibros.js'

const buscadorLibros = crearBuscador();
const reconocedorLibros = crearReconocedorDeTexto();

function crearFactoryCUBuscarLibro() {
    return {
        crearCUBuscarLibro: () => {
            return new CasoDeUso_BuscarLibro(reconocedorLibros, buscadorLibros)
        }
    }
}

export default crearFactoryCUBuscarLibro