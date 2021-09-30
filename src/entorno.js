/**Las variables de entorno siempre van en mayuscula*/
let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.WEB || 'no tengo web';

console.log('Hola ' + nombre);
console.log('Mi web es ' + web);

console.log('Otra linea de codigo');
console.log('Probando Nodemon');