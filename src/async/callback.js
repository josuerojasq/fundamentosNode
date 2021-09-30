/* function soyAsincrona(miCallback) {
    // console.log('Hola, soy una funcion asincrona');
    setTimeout(function () {
        console.log('Estoy siendo asincrona');
        miCallback();
    }, 1000)
}

console.log('Iniciando proceso...');
soyAsincrona(function () {
    console.log('Terminando proceso...');
}); */

function hola(nombre, miCallback) {
    // console.log('Hola, soy una funcion asincrona');
    setTimeout(function () {
        console.log('Hola, ' + nombre);
        miCallback(nombre);
    }, 1000)
}

function adios(nombre, otroCallback) {
    setTimeout(function () {
        console.log('Adios ' + nombre + '!👋');
        otroCallback();
    }, 1500);
}

let miNombre = 'Joel';
console.log('Iniciando proceso...');
hola(miNombre, function (nombre) {
    adios(nombre, function () {
        console.log('Terminando proceso...');
    })
});

/* hola(nombre, function () {});
adios(nombre, function () {}); */