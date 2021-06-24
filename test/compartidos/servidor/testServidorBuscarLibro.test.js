import axios from 'axios'
import {crearServidor} from '../../../src/compartidos/servidor/servidor.js'
import fs from 'fs'
import FormData from 'form-data'

const servidor = crearServidor()

await servidor.conectar(3000)

const form = new FormData();
const stream = fs.createReadStream('./src/compartidos/assets/sherlock.jpg');
form.append('image', stream);
const formHeaders = form.getHeaders();

await axios.post('http://localhost:3000/api/libros', form, { headers: { ...formHeaders } })
            .then(resultado => console.log(resultado.data))
            .catch(e => console.log(e.response.data))


await servidor.desconectar()