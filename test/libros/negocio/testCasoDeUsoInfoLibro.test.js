import CUFactoryInfoLibro from '../../../src/libros/negocio/factoryCuInfoLibro.js'
import { crearBuscador } from "../../../src/libros/apis/buscadorDeLibros.js";
import DaoFactory from '../../../src/libros/persistencia/factoryDaoUsuario.js'
// import {getClienteMongo} from '../../../src/libros/persistencia/factoryDaoUsuario.js'
// const libroBuscado = {
//     title : "Harry Potter 5 y la orden del Fénix",
//     authors: [
//         "J. K. Rowling"
//     ],
//     publishedDate: "2011-06",
//     description: "Las tediosas vacaciones de verano en casa de sus tíos todavía no han acabado y Harry se encuentra más inquieto que nunca. Apenas ha tenido noticias de Ron y Hermione, y presiente que algo extraño está sucediendo en Hogwarts. En efecto, cuando por fin comienza otro curso en el famoso colegio de magia y hechicería, sus temores se vuelven realidad. El Ministerio de Magia niega que Voldemort haya regresado y ha iniciado una campaña de desprestigio contra Harry y Dumbledore, para lo cual ha asignado a la horrible profesora Dolores Umbridge la tarea de vigilar todos sus movimientos. Así pues, además de sentirse solo e incomprendido, Harry sospecha que Voldemort puede adivinar sus pensamientos, e intuye que el temible mago trata de apoderarse de un objeto secreto que le permitiría recuperar su poder destructivo.",
//     pageCount : 896, 
//     categories : [
//         "Children's stories"
//     ],
//     imageLinks: {
//         smallThumbnail: "http://books.google.com/books/content?id=Qo5vvgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",    
//     },
//     infoLink: "http://books.google.com.ar/books?id=Qo5vvgEACAAJ&dq=Harry+Potter+y+la+Orden+del+F%C3%A9nix&hl=&source=gbs_api",
// } 


const resultado = await crearBuscador().libroPorAutor("ISAAC ASIMOV")
const libroEjemplo = resultado[0]
const idUsuario = 30

try{
    const CasoDeUso_infoLibroPorMail = CUFactoryInfoLibro.crearCU_enviarInfoLibro()
    await CasoDeUso_infoLibroPorMail.ejecutar(libroEjemplo, idUsuario)
}catch(err){
    console.log("MENSAJE en TEST CASO DE USO:", err.message)
}

// console.log("y aca?", DaoFactory.getClienteMongo())
// const clienteMongo = await DaoFactory.getClienteMongo()
const clienteMongo = await DaoFactory.getClienteMongo()
clienteMongo.desconectar('DbUsuarios')