function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log('Hola, ' + nombre);
        miCallback(nombre);
    }, 1000)
}

function hablar(callbackHablar) {
    setTimeout(function () {
        console.log('Bla bla bla bla bla...');
        callbackHablar();
    }, 1500);
}

function conversacion(nombre, veces, unCallback) {
    if (veces > 0) {
        hablar(function () {
            conversacion(nombre, --veces, unCallback);
        });
    }else {
        adios(nombre, unCallback);
    }
}

function adios(nombre, otroCallback) {
    setTimeout(function () {
        console.log('Adios ' + nombre + '!👋');
        otroCallback();
    }, 1000);
}

// --
let miNombre = 'Carlita';
console.log('Iniciando proceso...');
hola(miNombre, function (nombre) {
    conversacion(nombre, 7, function () {
        console.log('Proceso terminado');
    });
});

/* hola(miNombre, function (nombre) {
    adios(nombre, function () {
        console.log('Terminamos...');
    })
}); */

/* hola(miNombre, function (nombre) {
    hablar(function () {
        hablar(function () {
            hablar(function () {
                adios(nombre, function () {
                    console.log('Terminando proceso...');
                });
            });
        });
    });
}); */