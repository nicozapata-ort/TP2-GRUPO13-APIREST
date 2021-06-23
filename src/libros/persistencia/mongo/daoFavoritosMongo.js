import { listaDelUsuario } from "../../modelos/listaFavoritos.js";


function crearDaoFavoritos(dbMongo) {
    const db = dbMongo.collection('Favoritos')

    return {
        agregarFavorito: async ({ id_user, id_libro }) => {

            let lista = await db.findOne({ idUser: id_user })
            const existeLista = lista !== null

            lista = listaDelUsuario.agregarLibro({ lista, id_libro, id_user })

            if (existeLista) {
                await db.updateOne(
                    { idUser: id_user },
                    { $set: { favoritos: lista.favoritos } }
                )

            } else {
                await db.insertOne(lista)
            }


        }
    }
}


export { crearDaoFavoritos }