import { crearErrorFavoritoInvalido } from "../errores/errorFavoritoInvalido.js";
const listaDelUsuario = {
    agregarLibro: ({lista, id_libro,id_user}) => {

        if (!lista) {
            lista = {
                idUser: id_user,
                favoritos: []
            }
        } else {
            if (lista.favoritos.includes(id_libro)) {
                const err = crearErrorFavoritoInvalido('El libro ya se encuentra en la lista')
                throw err
            }
        }

        lista.favoritos.push(id_libro)

        return lista
    },

}

export { listaDelUsuario }