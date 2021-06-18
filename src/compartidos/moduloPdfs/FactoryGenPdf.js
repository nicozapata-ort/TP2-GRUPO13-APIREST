import {crearGeneradorDePDFInfoLibro}  from   './genPDF.js'
import { crearGeneradorDeRutaPdf } from './creadorDeRutaPdf.js'


/**** Creacion del modulo generador de PDF *************/ 
/*** Titulo */
const encabezadoTitulo = 'Libro Favorito';
/*** fecha */
const formatFecha = f => f.getFullYear() + '/' + ("0" + (f.getMonth() + 1)).slice(-2) + '/' + ("0" + f.getDate()).slice(-2) 
const fechaString = formatFecha(new Date ())
/** font */
const fonts = {
    Roboto: {
      normal: './src/compartidos/moduloPdfs/robot-fonts/Roboto-Regular.ttf',
      bold: './src/compartidos/moduloPdfs/robot-fonts/Roboto-Medium.ttf',
      italics: './src/compartidos/moduloPdfs/robot-fonts/Roboto-Italic.ttf',
      bolditalics: './src/compartidos/moduloPdfs/robot-fonts/Roboto-MediumItalic.ttf'
    }
  };

//   const generadorDePDF = crearGeneradorDePDFInfoLibro(encabezadoTitulo,fechaString,fonts)

  /* Creacion del generador de RutaPdf */ 
//   const generadorRutaPdf = crearGeneradorDeRutaPdf()


//   function crearFactoryGenpdf() {
//         return generadorDePDF
//   }

//   function crearRutaPdf(){
//         return generadorRutaPdf
//   }

  function crearFactoryGenPdf() {
        
      return{
              generarPdf: () => {
                  const generadorDePDF = crearGeneradorDePDFInfoLibro(encabezadoTitulo,fechaString,fonts)
                  return generadorDePDF
              },
              generarRutaPdf: () => {
                  const generadorRutaPdf = crearGeneradorDeRutaPdf()
                  return generadorRutaPdf
              }
        } 
  }


//   export {crearFactoryGenPdf, crearRutaPdf }
  export { crearFactoryGenPdf }