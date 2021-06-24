import {CU_infoLibroPdfporMail}  from   './cuInfoLibro.js'
import {crearFactoryGenPdf} from  '../../compartidos/moduloPdfs/FactoryGenPdf.js'
import {crearFactoryMailer_Sender} from  '../../compartidos/moduloMail/factoryMailerSender.js'
import factoryDaoUsuario from '../persistencia/factoryDaoUsuario.js'

const daoUsuario = await factoryDaoUsuario.getDaoUsuarios()

const sender = await crearFactoryMailer_Sender().generarMail_sender()
const generadorDatosMail = crearFactoryMailer_Sender().generarDatosMail()

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