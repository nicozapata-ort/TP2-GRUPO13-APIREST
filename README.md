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




