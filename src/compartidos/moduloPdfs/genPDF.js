import PdfPrinter from 'pdfmake';
import fs from 'fs';
import styles from './styles.js';


  const __dirname = fs.realpathSync('.');

  function crearGeneradorDePDFInfoLibro(encabezado,fechaHoy,fonts) {

    return{
      generarPDF: ({datolibro}, nombreSalidaPdf) => {
      
           const  content = [
          { 
             stack: [
              `FECHA: ${fechaHoy}`,
              { text: `${encabezado}\n\n`, style: "subheader"},
             ],
             style: "header"
          },      
     
          { text:  `TITULO:`, style: "label"},
          { text: `${datolibro.title}\n\n`, style: "content"},

          { text:  `AUTOR:`, style: "label"},
          { text: `${datolibro.authors}\n\n`, style: "content"},

          { text:  `PUBLICACION:`, style: "label"},
          { text: `${datolibro.publishedDate}\n\n`, style: "contentRes"},

          { text:  `RESEÑA:`, style: "label"},
          { text: `${datolibro.description}\n\n`, style: "contentRes"},

          { text:  `CANTIDAD de PAGINAS:`, style: "label"},
          { text: `${datolibro.pageCount}\n\n`, style: "content"},

          // { text:  `CATEGORIA:`, style: "label"},
          // { text: `${datolibro.categories}\n\n`, style: "content"},

          { image: './src/compartidos/moduloPdfs/miLibro.png' , fit: [100, 100] }, 
          { text: `${datolibro.title}\n\n`, style: "content"},
          
          { text: `+ Informacion`, link: `${datolibro.infoLink}`, style: "labelInfo"},
          
        ]

      

        const docDefinition = {
          content: content,
          styles: styles
        };
        
        
        const printer = new PdfPrinter(fonts);
        const pdfDoc = printer.createPdfKitDocument(docDefinition);    
        pdfDoc.pipe( fs.createWriteStream(__dirname + `${nombreSalidaPdf}`));
        pdfDoc.end();
        
      }
    }  
  }

  export { crearGeneradorDePDFInfoLibro }