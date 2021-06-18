function crearEmail(datosMail) {
   
    const expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const esValido = expReg.test(datosMail.destinatario)
    
    if (!esValido && datosMail.destinatario !== "" ){
        throw new Error('Email invalido')
    }

    if (!datosMail.subject){
        throw new Error('subject vacio')
    }

    if (!datosMail.text){
        throw new Error('text vacio')
    }

    if (!datosMail.filename){
        throw new Error('filename inválido')
    }

    if (!datosMail.path){
        throw new Error('path inválido')
    }

    return datosMail
}

export { crearEmail }

