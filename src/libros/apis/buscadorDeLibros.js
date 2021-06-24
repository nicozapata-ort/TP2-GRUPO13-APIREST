import fetch from 'node-fetch'  //request a la url que le agregue
import { crearErrorLibroInvalido } from "../errores/errorLibroInvalido.js";
const urlAPI = "https://www.googleapis.com/books/v1/volumes"

/*
You can perform a volumes search by sending an HTTP GET request to the following URI:
https://www.googleapis.com/books/v1/volumes?q=search+terms
*/

function crearBuscador() {  //nombre mas especifico

    return {

        libroPorReconocimiento: async (query) => {
            return new Promise((resolve, reject) => {
                fetch(urlAPI + `?q=${query}`)
                    .then(response => response.json())
                    .then(response => resolve(formatear(response)))
                    .catch(error => reject(error))
            })
        },

        libroPorAutor: async (autor) => {
            return new Promise((resolve, reject) => {
                fetch(urlAPI + `?q=+inauthor:${autor}`)
                    .then(response => response.json())
                    .then(response => resolve(formatearLista(response)))
                    .catch(error => reject(error))
            })
        },

        libroPorId: async (id) => {
            return new Promise((resolve, reject) => {
                fetch(urlAPI + `/${id}`)
                    .then(response => response.json())
                    .then(response => resolve(formatear(response)))
                    .catch(error => reject(error))
            })
        },

    }
}

function formatear(librosAPI) {

    if(!librosAPI){
        throw crearErrorLibroInvalido('Libro no encontrado')
    }

    let book
    if (librosAPI.hasOwnProperty('items')) {
        book = librosAPI.items[0].volumeInfo
        book.id = librosAPI.items[0].id
    } else {
        book = librosAPI.volumeInfo
        book.id = librosAPI.id
    }

    const bookFormateado = formatoBook(book)
    return bookFormateado

}
//modelo libro
function formatoBook(book) {

    const losAtributosDelBook = {
        id: book.id,
        title: book.title,
        authors: book.authors[0],
        publishedDate: book.publishedDate,
        averageRating: book.averageRating,
        description: book.description,
        pageCount: book.pageCount,
        imageLinks: book.imageLinks,
        infoLink: book.infoLink
    }

    return losAtributosDelBook

}

function formatearLista(librosAPI) {

    const maxBooks = 10
    let i = 0
    const lista = []

    while (i < maxBooks) {   // falta validacion de que haya libro

        const book = librosAPI.items[i].volumeInfo
        book.id = librosAPI.items[i].id
        const bookFormateado = formatoBook(book)
        lista.push(bookFormateado)

        i++
    }

    return lista

}

export { crearBuscador }