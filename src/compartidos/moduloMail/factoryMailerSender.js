import nodemailer from "nodemailer"; 
import { crearGeneradorDatosMail } from '../../../src/compartidos/moduloMail/creadorDeMails.js'
import {crearMailSender}  from   './mailSender.js'

const testAccount = await nodemailer.createTestAccount();

const credenciales = {
    host: 'smtp.ethereal.email',
    user: testAccount.user,
    pass: testAccount.pass
}

function crearFactoryMailer_Sender() {
        
    return{
            generarMail_sender: () => {
                const sender = crearMailSender(credenciales)
                return sender
            },
            generarDatosMail: () => {
                const generadorDatosMail = crearGeneradorDatosMail()
                return generadorDatosMail
            }
      } 
}

export { crearFactoryMailer_Sender }



