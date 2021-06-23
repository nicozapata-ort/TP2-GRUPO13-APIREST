import CasoDeUso_Nuevo_Favorito from "./cuFavoritos.js"
import nodemailer from "nodemailer";
import {crearFactoryMailer_Sender} from "../../compartidos/moduloMail/factoryMailerSender.js"
import { crearBuscador } from "../apis/buscadorDeLibros.js";
import  factoryDaoFavoritos  from "../persistencia/factoryDaoFavoritos.js";
import factoryDaoUsuario from '../persistencia/factoryDaoUsuario.js'

//Se crea cuenta de prueba para el enviador de mails
const test = await nodemailer.createTestAccount();
const sender = await crearFactoryMailer_Sender().generarMail_sender()

//Se crea un DAO para los usuarios para realizar la prueba
// const daoUsuarios = {
//     getUser: (id)=>{return {id: id, mail: "mailusuario@gmail.com"}}
// }
const daoUsuarios = await factoryDaoUsuario.getDaoUsuarios()

//DAO de libros para realizar la prueba
const buscadorLibros = crearBuscador()

const daoFavoritos = await factoryDaoFavoritos.getDaoFavoritos()

function crearCU_NuevoFavorito(){
    const caso_de_uso = new CasoDeUso_Nuevo_Favorito({daoUsuarios, buscadorLibros, sender,daoFavoritos})
    return caso_de_uso
}

export default crearCU_NuevoFavorito