import express from "express";
import Factory_Crear_CU_Favoritos from "../negocio/factoryCuFavoritos.js";
import CUFactoryInfoLibro from '../negocio/factoryCuInfoLibro.js'



const routerUsuario = express.Router()

routerUsuario.post('/:idCli/Favoritos', async (req, res, next) => {
    try {
        const cu = Factory_Crear_CU_Favoritos()
        await cu.agregarFavorito({
            id_user: req.params.idCli,
            ...req.body,
        })
        res.json({ result: 'ok' })
    } catch (err) {
        next(err)
    }
})

routerUsuario.post('/infoLibroPdfMail/:idUsuario', async (req, res, next) => {
    try {
        const CasoDeUso_infoLibroPorMail = CUFactoryInfoLibro.crearCU_enviarInfoLibro()
        await CasoDeUso_infoLibroPorMail.ejecutar(req.body, req.params.idUsuario)
        res.json({ msg: 'ok' })
    } catch (err) {
        next(err)
    }
})


routerUsuario.use((error, req, res, next) => {
    if (error.type === 'ERROR_DATOS_INVALIDOS') {
        res.status(400)
    } else if (error.type === 'ERROR_USUARIO_NO_ENCONTRADO') {
        res.status(404)
    } else {
        res.status(500)
    }
    res.json({ message: error.message })
})


export { routerUsuario }



// import CUFactoryInfoLibro from '../negocio/factoryCuInfoLibro.js'

// function crearRouterInfoLibro(){

//   const routerInfoLibro = express.Router()

//   routerInfoLibro.post('/infoLibroPdfMail/:idUsuario', async (req, res, next) => {
//     try{
//       const CasoDeUso_infoLibroPorMail = CUFactoryInfoLibro.crearCU_enviarInfoLibro()
//       await CasoDeUso_infoLibroPorMail.ejecutar(req.body,req.params.idUsuario)
//       res.json({ msg: 'ok' })
//     }catch(err){
//       next(err)
//     }
//   })


//   routerInfoLibro.use( async (error, req, res, next) => {

//     if (error.type === 'ERROR_USUARIO_INVALIDO') {
//       await res.status(400)
//     } else {
//       res.status(500)
//     }

//     await res.json({ message: error.message })
//   })


//   return routerInfoLibro
// }

// export {crearRouterInfoLibro} 