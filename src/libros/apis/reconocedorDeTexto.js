import vision from '@google-cloud/vision'

function crearReconocedorDeTexto(){
    const client = new vision.ImageAnnotatorClient();

    return{
        reconocerPorTexto: async rutaImagen => {
            const fileName = rutaImagen;
            const [result] = await client.textDetection(fileName);
            const detections = result.textAnnotations;

            return detections[0].description;
        }
    }
}

export {crearReconocedorDeTexto}