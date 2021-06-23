import express from 'express'
import CU_Factory from '../negocio/factoryCuBuscarLibroPorImagen.js'
import { crearCUBusquedaPorAutor } from '../negocio/factoryCuBuscarLibrosPorAutor.js'

const routerLibros = express.Router();

routerLibros.post('/', async (req, res, next) => {
    try {
        const CasoDeUso_BuscarLibro = CU_Factory().crearCUBuscarLibro()
        const resultado = await CasoDeUso_BuscarLibro.buscarLibro(req.body)
        res.status(201).json(resultado)
    } catch (error) {
        next(error);
    }
})


routerLibros.get('/porAutor', async (req, res, next) => {
  try {
      const CU_BuscarLibroPorAutor = crearCUBusquedaPorAutor()
      const resultado = await CU_BuscarLibroPorAutor.buscarPorAutor(req.body)
      res.status(201).json(resultado)
  } catch (error) {
      next(error);
  }
})

routerLibros.use((error, req, res, next) => {
    if (error.type === 'ERROR_RUTA_INVALIDA') {
      res.status(400)
    } else if (error.type === 'ERROR_TEXTO_IMAGEN_INVALIDO') {
      res.status(400)
    } else {
      res.status(500)
    }
    res.json({ message: error.message })
})


export default routerLibros