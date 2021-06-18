import { crearServidor } from "./compartidos/servidor/Servidor";

const servidor = crearServidor()

await servidor.conectar();

console.log('Servidor listo!')