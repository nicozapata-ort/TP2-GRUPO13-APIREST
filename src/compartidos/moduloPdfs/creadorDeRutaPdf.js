
function crearGeneradorDeRutaPdf(){  
    return {
        generarRutaPdf: (salidaPdf) => {
            const fecha = Date.now()
            return {
                nombreSalidaPdf : `/src/compartidos/assets/salidaPdf/${fecha}-${salidaPdf}.pdf`
                
            }
        }
    }
}
    
export { crearGeneradorDeRutaPdf }