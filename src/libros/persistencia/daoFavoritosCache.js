import { listaDelUsuario } from "../modelos/listaFavoritos.js";

const db = []

function crearDaoFavoritosCache() {

    return {
        agregarFavorito: async ({ id_user, id_libro }) => {

            let lista = await db.find(l => l.idUser == id_user)
            const existeLista = lista != undefined

            lista = listaDelUsuario.agregarLibro({ lista, id_libro, id_user })

            if (existeLista) {
                const index = db.findIndex(l => l.idUser == id_user)
                db[index] = lista
            } else {
                db.push(lista)
            }
        }
    }
}

export { crearDaoFavoritosCache }