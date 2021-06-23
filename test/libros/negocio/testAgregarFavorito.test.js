import facotoryCUFavortitos from "../../../src/libros/negocio/factoryCuFavoritos.js";
// import { desconectarMongo } from "../../../src/libros/persistencia/mongo/daoFavoritosMongo.js";

const cuFavoritos = facotoryCUFavortitos()
const prueba = {
    id_user: 1,
    id_libro: 'yozzvQAACAAJ'
}

try {
    await cuFavoritos.agregarFavorito(prueba)
    console.log("Caso de uso satisfactorio")
    // await desconectarMongo()
} catch (error) {
    console.log(error.message)
}
