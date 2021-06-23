import { crearGeneradorDatosMail } from "../../compartidos/modulomail/creadorDeMails.js";

function CasoDeUso_Nuevo_Favorito({ daoUsuarios, buscadorLibros, sender, daoFavoritos }) {
    this.buscadorLibros = buscadorLibros;
    this.daoUsuarios = daoUsuarios;
    this.sender = sender;
    this.daoFavoritos = daoFavoritos

    this.agregarFavorito = async ({ id_user, id_libro }) => {

        const user = await daoUsuarios.getByUsuarioId(id_user)
        const libro = await buscadorLibros.libroPorId(id_libro)
        
        await daoFavoritos
        .agregarFavorito({ id_user: user.id, id_libro: libro.id})

        const mail = crearGeneradorDatosMail().mailNuevoFavorito({
            destinatario: user.usuarioEmail,
            title: libro.title
        })

        await sender.enviarMailSinAdjunto(mail)

    }
}

export default CasoDeUso_Nuevo_Favorito