const fs = require('fs');

function leer(ruta, callback) {
    fs.readFile(ruta, (err, data) => {
        callback(data.toString());
    })
}

function escribir(ruta, contenido, callback) {
    fs.writeFile(ruta, contenido, function (err) {
        if (err) {
            console.error('No he podido escribirlo', err);
        } else {
            console.log('Se ha escrito correctamente! 💪');
        }
    })
}

function borrar(ruta, callback) {
    fs.unlink(ruta, (err) => {
        if (err) {
            console.error('No se ha podido eliminar el archivo');
        } else {
            console.log('Archivo eliminado con exito! 💪');
        }
    });
}


// borrar(__dirname + '/archivo1.txt', console.log);
// escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo, creado desde Node', console.log);
leer(__dirname + '/archivo.txt', console.log);