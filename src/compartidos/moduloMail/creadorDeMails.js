function crearGeneradorDatosMail(){
    return {
           mailNuevoFavorito: ({destinatario, title}) => {
            return {
                destinatario: destinatario,
                subject: `Nuevo favorito guardado en su lista`,
                text: `Le informamos que el libro "${title}" fue agregado a su lista de favoritos exitosamente`
            }
           },     
           mailCompartirPDF: (destinatario, filename, path) => {
            return{
                destinatario: destinatario,
                subject:"Desde Mi libro Favorito",
                text:"Hola, les estamos enviando el libro solicitado",
                filename: filename, 
                path: `.${path}`
            }
        }
    }   
}
export { crearGeneradorDatosMail }