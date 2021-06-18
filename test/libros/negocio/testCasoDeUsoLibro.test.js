import CasoDeUso_BuscarLibro from '../../../src/libros/negocio/BuscarLibro.js';
import { crearReconocedorDeTexto } from '../../../src/libros/utils/ApiTexto.js';
import { crearBuscador } from '../../../src/libros/utils/ApiLibro.js';

const buscadorLibros = crearBuscador();
const reconocedorLibros = crearReconocedorDeTexto();

const CU_buscarLibro = new CasoDeUso_BuscarLibro(reconocedorLibros, buscadorLibros)

const datoRutaImagen = 'D:/ORT/2do año/TP2/refactorizacion/casoDeUso_Factory/src/compartidos/assets/harry.jpg'

CU_buscarLibro.buscarLibro({ datoRutaImagen })
    .then(result => console.log(result))
    .catch(error => console.log(error))