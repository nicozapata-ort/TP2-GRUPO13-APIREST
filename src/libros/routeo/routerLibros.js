import express from 'express'
import CU_Factory from '../negocio/factoryCuBuscarLibroPorImagen.js'
import { crearCUBusquedaPorAutor } from '../negocio/factoryCuBuscarLibrosPorAutor.js'
import {crearReceptorDeArchivos} from '../../compartidos/moduloRecepcionDeArchivos/RecepcionDeArchivos.js'
import path from 'path'


const routerLibros = express.Router();

const __dirname = path.resolve(path.dirname(''))

const upload  = crearReceptorDeArchivos({directorio: __dirname + '/src/compartidos/assets', fileSize: 3000000})

routerLibros.post('/', upload.single('image'), async (req, res, next) => {
    try {
        const CasoDeUso_BuscarLibro = CU_Factory().crearCUBuscarLibro()
        const resultado = await CasoDeUso_BuscarLibro.buscarLibro({imagen: `${__dirname}/src/compartidos/assets/${req.file.originalname}`})
        res.status(201).json(resultado)
    } catch (error) {
        next(error);
    }
})

//Nuevo, Diana
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
    if (error.type === 'ERROR_RUTA_INVALIDA' || error.type === 'ERROR_TEXTO_IMAGEN_INVALIDO' || error.type === 'ERROR_ARCHIVO_INVALIDO' ) {
      res.status(400)
    } else {
      res.status(500)
    }
    res.json({ message: error.message })
})


export default routerLibros