import multer from 'multer'
import path from 'path'
import { crearErrorArchivoInvalido } from "../../libros/errores/errorArchivoInvalido.js";

function crearReceptorDeArchivos({ directorio, fileSize }){

  const fileStorageEngine =  multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, directorio)
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })

  let upload = multer({ 
    storage: fileStorageEngine,
    limits: {fileSize}, 
    fileFilter: (req, file, cb) => {
      const tiposArchivos = /jpeg|jpg|png|gif|pdf|doc|docx/
      const mimetype = tiposArchivos.test(file.mimetype)
      const extname = tiposArchivos.test(path.extname(file.originalname))

      if(mimetype && extname){
        return cb(null, true)
      }

      cb(crearErrorArchivoInvalido('El archivo ingresado no es válido'))
    } 
  });

  return upload
}

export {crearReceptorDeArchivos}