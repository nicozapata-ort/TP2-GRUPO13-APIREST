import { crearGeneradorDatosMail } from "../../compartidos/modulomail/creadorDeMails.js";

function CasoDeUso_Nuevo_Favorito({daoUsuarios, buscadorLibros, sender, daoFavoritos}) {
    this.buscadorLibros = buscadorLibros;
    this.daoUsuarios = daoUsuarios;
    this.sender = sender;
    this.daoFavoritos = daoFavoritos

    this.agregarFavorito = async ({id_user, id_libro}) => {

        const user = await daoUsuarios.getUser(id_user)        
        const libro = await buscadorLibros.libroPorId(id_libro)
        console.log(libro.title)
        daoFavoritos.agregarFavorito(user,libro)
        const mail = crearGeneradorDatosMail().mailNuevoFavorito({destinatario: user.mail, title: libro.title})
        await sender.enviarMailSinAdjunto(mail)
        
    }
}

export default CasoDeUso_Nuevo_Favorito