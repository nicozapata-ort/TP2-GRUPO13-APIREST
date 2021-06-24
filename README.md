**********************************************************************************************************
1) Agregar un libro a la lista de Favoritos del Usuario
Debe recibir un recurso del siguiente estilo
{
	id_libro : string
}
_______________________________________________________________________________________________________
|Nombre de la propiedad|	Valor|	Descripción                                                        |
|______________________|_________|_____________________________________________________________________|
|id_libro	           |string	 |  El identificador del libro que el usuario quiere agregar a la lista|
|___________ __________|_________|_____________________________________________________________________|

HTTP Request
POST	       	    /api/Usuarios/userId/Favoritos
_____________________________________________________________________________________________
|Nombre de la propiedad	|Valor	  |Descripción                                               |
|_______________________|_________|__________________________________________________________|
|userId	                |string	  | El ID del usuario que quiere agregar un libro a la lista |
|_______________________|_________|__________________________________________________________|

Si la petición sale como es debido devuelve un código 200 con un JSON con el mensaje de todo estuvo ok
{
	message: ‘ok’
}

Errores
________________________________________________________________________________________________________
|Código	| Descripción                                                                                   |
|_______|_______________________________________________________________________________________________|
|400    | Se omitió o se envió mal algún dato, en este caso un libro que ya se encontraba agregado      | |       | la lista del usuario que solicita el request                                                  |
|_______________________________________________________________________________________________________|
|404	|No se encontró el recurso, por ejemplo, un idUser o un ID de un libroinexistente               |
|_______|_ _____________________________________________________________________________________________|
|500	|Fallo interno del servidor, por ejemplo de comunicación con alguna de las API’s qie intervienen||       |en el método o fallo contra la base de datos                                                   |
|_______|_______________________________________________________________________________________________|


*********************************************************************************************************
2) Enviar un libro buscado en formato PDf por Mail, utiliza el id de usuario para buscar el mail del destinatario

Debe recibir un recurso del siguiente estilo
{
	datolibro : objeto json
    idUsuario : number
}
_______________________________________________________________________________________________________
|Nombre de la propiedad|	Valor|	Descripción                                                        |
|______________________|_________|_____________________________________________________________________|
|datolibro	           |json	 |  Datos de libro buscado en el Api Google Books                      |
|___________ __________|_________|_____________________________________________________________________|

HTTP Request
POST	       	    /api/Usuarios/infoLibroPdfMail/${idUsuario}
_____________________________________________________________________________________________
|Nombre de la propiedad	|Valor	  |Descripción                                               |
|_______________________|_________|__________________________________________________________|
|idUsuario              |number	  | El ID del usuario que quiere agregar un libro a la lista |
|_______________________|_________|__________________________________________________________|

Si la petición sale como es debido devuelve un código 200 con un JSON con el mensaje de todo estuvo ok
{
	message: ‘ok’
}

Errores
________________________________________________________________________________________________________
|Código	| Descripción                                                                                   |
|_______|_______________________________________________________________________________________________|
|400    | datos invalidos ingresado por el usuario en el request                                        |
|_______|_______________________________________________________________________________________________|
|404	|No se encontró el recurso, por ejemplo, un idUser inexistente                                  |
|_______|_ _____________________________________________________________________________________________|
|500	|Fallo interno del servidor, por ejemplo de comunicación con alguna de las API’s qie intervienen||       |en el método o fallo contra la base de datos                                                   |
|_______|_______________________________________________________________________________________________|

*********************************************************************************************************
3) Alta de usuario: este caso de uso es meramente a modo de Test

Debe recibir un recurso del siguiente estilo
{
	usuario : objeto json
}
_______________________________________________________________________________________________________
|Nombre de la propiedad|	Valor|	Descripción                                                        |
|______________________|_________|_____________________________________________________________________|
|usuario	           |json	 |  objeto usuario con los siguientes campos: id : numbre              | 
|                      |         |                                         nombre: string              |  
|                      |         |                                   usuarioEmail: string              |
|___________ __________|_________|_____________________________________________________________________|

HTTP Request
POST	       	    api/Usuarios/registrarUsuario

Si la petición sale como es debido devuelve un código 200 con un JSON con el mensaje de todo estuvo ok
{
	message: ‘ok’
}

Errores
________________________________________________________________________________________________________
|Código	| Descripción                                                                                   |
|_______|_______________________________________________________________________________________________|
|400    | datos invalidos ingresado por el usuario en el request                                        |
|_______|_______________________________________________________________________________________________|
|400	| usuario existente (ya se ingreso un usuario con el id)                                        |
|_______|_ _____________________________________________________________________________________________|
|500	|Fallo interno del servidor, por ejemplo de comunicación con alguna de las API’s qie intervienen||       |en el método o fallo contra la base de datos                                                   |
|_______|_______________________________________________________________________________________________|


*********************************************************************************************************

#BUSCAR LIBROS INGRESANDO NOMBRE DE AUTOR

Debe recibir un recurso del siguiente estilo:

{
	autor: String
}

Nombre de la propiedad		Valor		Descripción
autor				String		El usuario ingresa el nombre del autor/a de quien quiere recibir libros

HTTP REQUEST

GET       	    /api/libros/porAutor?q=inauthor:autor

Nombre de la propiedad		Valor		Descripción
listaLibros			array		Devuelve lista de 10 libros del autor/a ingresado por el usuario

Si la petición sale como es debido devuelve un código 200 con un JSON con el mensaje de todo estuvo ok:

{
	message: ‘ok’
}

ERRORES

Código	Descripción
400	Se omitió o se envió mal el dato del autor, por ejemplo, vacío.
404	No se encontró el recurso.
500	Fallo interno del servidor, por ejemplo de comunicación con la API de Google Book que interviene en el método.


*********************************************************************************************************

4) Buscar un libro mediante la ruta de una imagen

El Caso de Uso BuscarLibro debe recibir un recurso del siguiente estilo
{
	imagen: String
}

_______________________________________________________________________________________________________
|Nombre de la propiedad|	Valor|	Descripción                                                        |
|______________________|_________|_____________________________________________________________________|
|imagen	           	   |string	 | La Ruta de la Imagen de la portada de un libro que el Usuario quiere| 
|                      |         | buscar.												               |  
|___________ __________|_________|_____________________________________________________________________|


{
  resultado: {
    id: string,
    title: string,
    authors: string,
    publishedDate: datetime,
    description: string,
    pageCount: number,
    imageLinks: object,
    infoLink: string
  }
}
_______________________________________________________________________________________________________
|Property Name         |Value    |Description                                                          |
|______________________|_________|_____________________________________________________________________|
|Id  	           	   |string	 | El ID del libro buscado.											   |  
|______________________|_________|_____________________________________________________________________|
|title	           	   |string	 | El titulo del libro buscado.							               |  
|______________________|_________|_____________________________________________________________________|
|authors	           |string	 | El autor del libro buscado.								           |  
|______________________|_________|_____________________________________________________________________|
|publishedDate         |datetime | La fecha de publicacion del libro buscado.			               |  
|______________________|_________|_____________________________________________________________________|
|description     	   |string	 | La descripcion del libro buscado.					               |  
|______________________|_________|_____________________________________________________________________|
|pageCount	           |number	 | La cantidad de paginas del libro buscado.			               |  
|______________________|_________|_____________________________________________________________________|
|imageLinks	       	   |object	 | El objeto que contiene la imagen de la portada del libro buscado, en|
|                      |         | dos formatos (smallThumbnail, thumbnail).						   |					    
|______________________|_________|_____________________________________________________________________|
|infoLink	       	   |string	 | El link de referencia del libro buscado.							   |  
|______________________|_________|_____________________________________________________________________|


HTTP Request

POST: /api/libros/
 
Debe mandar la imagen que se desea analizar. Si la petición sale como es debido, se guarda la imagen como archivo estatico, la imagen almacenada en la respectiva ruta es analizada y se devuelve un código 201 con un JSON con el resultado del libro buscado.


Parametros
_______________________________________________________________________________________________________
|Parameter name        |Value    |Description                                                          |
|______________________|_________|_____________________________________________________________________|
|image	           	   |form-data| La imagen de la portada del libro a analizar.				       |  
|___________ __________|_________|_____________________________________________________________________|


Errors
_____________________________________________________________________________________________
|Code                  |Description                                                          |
|______________________|_____________________________________________________________________|
|400	           	   | Bad Request - Ruta Invalida, TextoImagenInvalido, ArchivoInvalido	 |  
|___________ __________|_____________________________________________________________________|
|500	           	   | Server Errors - Por ejemplo, un error de Multer al cargar un archivo|  
|___________ __________|_____________________________________________________________________|

