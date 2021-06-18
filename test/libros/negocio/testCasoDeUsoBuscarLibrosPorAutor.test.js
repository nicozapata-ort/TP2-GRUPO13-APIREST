import { crearCUBusquedaPorAutor } from '../../../src/libros/negocio/factoryCuBuscarLibrosPorAutor.js'

const busqueda = new crearCUBusquedaPorAutor()

const resultado = await busqueda.buscarPorAutor("J.K. Rowling")

console.log(resultado)

const resultadoError = await busqueda.buscarPorAutor("")

console.log(resultadoError)
