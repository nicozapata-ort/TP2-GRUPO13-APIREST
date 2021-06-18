import { validarUsuario } from '../modelos/usuario.js'
import nodemailer from "nodemailer";  // Solo a modo de prueba}

// import { crearEmail } from '../modelos/Email.js'

function CU_infoLibroPdfporMail(generadorDePDF, enviadorDeMails, daoUsuario, generadorDatosMail,generadorRutaPdf){
    
    return{
        ejecutar: 
        async (datolibro, idUsuario) => {
            
            try {
                /*** Busco el usuario y valido lo buscado en el Dao */
                const usuarioEncontrado = await daoUsuario.getByUsuarioId(idUsuario) 
                const usuarioValidado = validarUsuario(usuarioEncontrado)
                
                /*** Genero el pdf con el nombre del usuario */
                const salidaPdf = `${usuarioValidado.nombre}-${datolibro.title}`
                const {nombreSalidaPdf} = generadorRutaPdf.generarRutaPdf(salidaPdf)
                await generadorDePDF.generarPDF({datolibro},nombreSalidaPdf)
                
                /*** Genero el mail con el pdf */
                const datosMail = generadorDatosMail.mailCompartirPDF(usuarioValidado.usuarioEmail ,datolibro.title, nombreSalidaPdf )
                const info = await enviadorDeMails.enviarMailConAdjunto(datosMail)
                  
                //Solo a modo de prueba: 
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            } catch(error) {
                throw (error)
            }
        }
    }
} 

export { CU_infoLibroPdfporMail }