import {crearRutaImagen} from '../modelos/rutaImagen.js'
import {crearTextoImagen} from '../modelos/textoImagen.js'

function CasoDeUso_BuscarLibro(reconocedorLibros, buscadorLibros){
    this.reconocedorLibros = reconocedorLibros;
    this.buscadorLibros = buscadorLibros;

    this.buscarLibro = async ({ datoRutaImagen }) => {

       //Verifico que la ruta ingresada sea valida
        const ruta = crearRutaImagen(datoRutaImagen)

        //Mando la ruta de la imagen para que se reconozca su texto
        const datosTextoDeImagen = await reconocedorLibros.reconocerPorTexto(ruta)

        //Verifico que el resultado en texto del reconocimiento de la imagen sea válido
        const textoDeImagen = crearTextoImagen(datosTextoDeImagen)

        //El resultado en texto de esa imagen reconocida lo mando para buscar el correspondiente libro
        const resultado = await buscadorLibros.libroPorReconocimiento(textoDeImagen);
        
        //Devuelvo el resultado de la busqueda del correspondiente libro
        return {resultado}
    }
}

export default CasoDeUso_BuscarLibro
