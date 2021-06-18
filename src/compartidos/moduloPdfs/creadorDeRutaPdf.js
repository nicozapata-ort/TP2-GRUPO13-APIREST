
function crearGeneradorDeRutaPdf(){  
    return {
        generarRutaPdf: (salidaPdf) => {
            const fecha = Date.now()
            return {
                nombreSalidaPdf : `/${fecha}-${salidaPdf}.pdf`
                
            }
        }
    }
}
    
export { crearGeneradorDeRutaPdf }