import facotoryCUFavortitos from "../../../src/libros/negocio/factoryCuFavoritos.js";

const cuFavoritos = facotoryCUFavortitos()

const prueba = {
    id_user: 7,
    id_libro: 'p3QQjwEACAAJ'
}
await cuFavoritos.agregarFavorito(prueba)

console.log("Caso de uso satisfactorio")