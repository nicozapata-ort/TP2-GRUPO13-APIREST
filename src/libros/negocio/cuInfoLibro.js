
import nodemailer from "nodemailer";  


function CU_infoLibroPdfporMail(generadorDePDF, enviadorDeMails, daoUsuario, generadorDatosMail,generadorRutaPdf){
    
    return{
        ejecutar: 
        async (datolibro, idUsuario) => {
            
            try {
                
                const usuarioEncontrado = await daoUsuario.getByUsuarioId(idUsuario) 
                
                const salidaPdf = `${usuarioEncontrado.nombre}-${datolibro.title}`
                const {nombreSalidaPdf} = generadorRutaPdf.generarRutaPdf(salidaPdf)
                await generadorDePDF.generarPDF({datolibro},nombreSalidaPdf)
                
                const datosMail = generadorDatosMail.mailCompartirPDF(usuarioEncontrado.usuarioEmail ,datolibro.title, nombreSalidaPdf )
                const info = await enviadorDeMails.enviarMailConAdjunto(datosMail)
                  
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            } catch(error) {
                throw (error)
            }
        }
    }
} 

export { CU_infoLibroPdfporMail }