import CasoDeUso_BuscarLibro from '../../../src/libros/negocio/cuBuscarLibroPorImagen.js';
import { crearReconocedorDeTexto } from '../../../src/libros/apis/reconocedorDeTexto.js';
import { crearBuscador } from '../../../src/libros/apis/buscadorDeLibros.js';

const buscadorLibros = crearBuscador();
const reconocedorLibros = crearReconocedorDeTexto();

const CU_buscarLibro = new CasoDeUso_BuscarLibro(reconocedorLibros, buscadorLibros)

const imagen = './src/compartidos/assets/portadas/sherlock.jpg'

CU_buscarLibro.buscarLibro({ imagen })
    .then(result => console.log(result))
    .catch(error => console.log(error))