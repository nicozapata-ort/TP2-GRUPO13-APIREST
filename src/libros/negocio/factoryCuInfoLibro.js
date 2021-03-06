import {crearDaoUsuarioCache}  from '../persistencia/daoUsuario.js'
import {CU_infoLibroPdfporMail}  from   './cuInfoLibro.js'
import {crearFactoryGenPdf} from  '../../compartidos/moduloPdfs/FactoryGenPdf.js'
import {crearFactoryMailer_Sender} from  '../../compartidos/moduloMail/factoryMailerSender.js'

/**** Creacion del Dao *********************************/
const daoUsuario = crearDaoUsuarioCache()

/****MAILSender */
const sender = await crearFactoryMailer_Sender().generarMail_sender()
const generadorDatosMail = crearFactoryMailer_Sender().generarDatosMail()

/***PDF Generator */
const generadorDePDF = crearFactoryGenPdf().generarPdf()
const generadorRutaPdf = crearFactoryGenPdf().generarRutaPdf()


function crearCU_enviarInfoLibro() {
    const CU_infoLibro = CU_infoLibroPdfporMail(
      generadorDePDF, 
      sender, 
      daoUsuario, 
      generadorDatosMail,
      generadorRutaPdf
    )
    return CU_infoLibro
}
 
export default {
    crearCU_enviarInfoLibro
}