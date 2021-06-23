import CasoDeUso_BuscarLibro from '../../../src/libros/negocio/cuBuscarLibroPorImagen.js';
import { crearReconocedorDeTexto } from '../../../src/libros/apis/reconocedorDeTexto.js';
import { crearBuscador } from '../../../src/libros/apis/buscadorDeLibros.js';

const buscadorLibros = crearBuscador();
const reconocedorLibros = crearReconocedorDeTexto();

const CU_buscarLibro = new CasoDeUso_BuscarLibro(reconocedorLibros, buscadorLibros)

const datoRutaImagen = './src/compartidos/assets/alquimista3.jpg'

CU_buscarLibro.buscarLibro({ datoRutaImagen })
    .then(result => console.log(result))
    .catch(error => console.log(error))