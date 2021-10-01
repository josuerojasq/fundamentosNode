const os = require('os');

//Ver la arquitectura del equipo (x64, x86, etc...)
console.log(os.arch());

//Ver la plataforma (Linux, Windows, MAC, etc ...)
console.log(os.platform());

//Ver los nucleos(cores) del procesador del equipo
console.log(os.cpus());
console.log(os.cpus().length);

//Señales del sistema
// console.log(os.constants);

//Ver la memoria libre del sistema
const SIZE = 1024;
function kb(bytes) { return bytes / SIZE; }
function mb(bytes) { return kb(bytes) / SIZE; }
function gb(bytes) { return mb(bytes) / SIZE; }
console.log(os.freemem());
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

//Ver el total de memoria del equipo
console.log(gb(os.totalmem()));

//Ver el directorio raiz del usuario
console.log(os.homedir());

//Ver el directorio temporal del equipo
console.log(os.tmpdir());

//Ver el nombre del host de la maquina
console.log(os.hostname());

//Ver las interfaces de red del equipo
console.log(os.networkInterfaces());