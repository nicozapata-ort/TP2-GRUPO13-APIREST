import express from 'express'
import routerLibros from '../../libros/routeo/routerLibros.js'
import { routerUsuario } from "../../libros/routeo/routerUsuarios.js";
// import {crearRouterInfoLibro} from '../../libros/routeo/routerUsuarios.js'


function crearServidor() {
  
  const app = express()
  
  app.use(express.json())
  
  app.use('/api/libros', routerLibros)
  
  //Nuevo, Carlitos
  app.use('/api/Usuarios/', routerUsuario)
  
  // //Nuevo, Wei
  // app.use('/api', crearRouterInfoLibro())

  let server = null

  return {
    conectar: (port) => {
      return new Promise((resolve, reject) => {
        if (server) {
          reject(new Error('servidor ya conectado'))
        } else {
          server = app.listen(port, () => {
            console.log(`todo bien, conectado en puerto ${server.address().port}`)
            resolve()
          })
          server.on('error', (err) => {
            reject(err)
          })
        }
      })
    },
    desconectar: () => {
      return new Promise((resolve, reject) => {
        server.close((err) => {
          if (err) {
            reject(err)
          } else {
            server = null
            resolve()
          }
        })
      })
    }
  }
}

export { crearServidor }