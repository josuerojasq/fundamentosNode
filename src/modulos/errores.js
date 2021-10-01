function otraFuncion() {
    seRompe();
}

function seRompe() {
    return 3 + z;
}

try {
    otraFuncion();
} catch (error) {
    console.error('Vaya, algo se ha roto...😱');
    console.error(error.message);
    console.log('Pero lo hemos capturado, no pasa nada 😉');
}

console.log('Esto se ejecuta al final');

/**Manejo de error en asincronia */
function seRompeAsincrona(callback) {
    setTimeout(function () {
        try {
            return 3 + z;
        } catch (error) {
            console.error('Error en mi funcion asincrona... 😱');
            callback(error);
        }
    }, 1000);
}

try {
    seRompeAsincrona(function (err) {
        console.log(err.message);
    });
} catch (error) {
    console.error('Vaya, algo se ha roto...😱');
    console.error(error.message);
    console.log('Pero lo hemos capturado, no pasa nada 😉');
}