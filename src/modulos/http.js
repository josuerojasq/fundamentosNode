const http = require('http');

http.createServer(router).listen('3000');

function router(request, response) {
    console.log('Nueva peticion! 🤓');
    console.log(request.url);

    switch (request.url) {
        case '/hola':
            let saludo = hola();
            response.write(saludo);
            response.end();
            break;
    
        default:
            response.write('Error 404: No se lo que quieres');
            response.end();
            break;
    }

    /* response.writeHead(201, { 'Content-Type': 'text/plain' });

    // Escribir respuesta al usuario
    response.write('Hola! Ya se usar HTTP de NodeJS... :)');

    response.end(); */
}

function hola() {
    return 'Hola que tal!';
}

console.log('Escuchando http en el puerto 3000');