console.log('Soy un Log');

console.info('Soy un Info');

console.error('Soy un Error');

console.warn('Soy un Warning');

var tabla = [
    {
        a: 1,
        b: 'Joel'
    },
    {
        a: 2,
        b: 'Carlita'

    },
    {
        a: 3,
        b: 'Luciana'

    },
];

/*Te muestra cosas en forma de tabla: */
console.table(tabla);

/*console.group agrupa los .log*/
console.group('Conversación');
console.log('Hola');
console.log('Bla bla bla bla bla');
console.group('Numeros');
console.log('Este es el 1');
console.log('Este es el 2');
console.groupEnd('Numeros');
console.log('glub glub glub');
console.log('adios');
console.groupEnd('Conversación');

/*Ejemplo en funciones de console.group */
function function1() {
    console.group('funcion1');
    console.log('Esto es de la funcion 1');
    console.log('Esto también')
    function2();
    console.log('He vuelo a la 1');
    console.groupEnd('funcion1');
}
function function2() {
    console.group('funcion2');
    console.log('ahora estamos en la funcion 2')
    console.groupEnd('funcion2');
}
console.log('Empezamos...');
function1();
console.log('Terminamos...');

/*Contador en consola*/
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces'); //Resetea el contador
console.count('veces');
console.count('veces');