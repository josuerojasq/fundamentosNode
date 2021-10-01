/* Aqui no es necesario importar ya que process es un modulo global */

process.on('beforeExit', () => {
    console.log('Joe, el proceso esta por  terminar! 🤓');
});

process.on('exit', () => {
    console.log('Joe, el proceso termino! 😉');
    setTimeout(() => {
        console.log('Esto no se verá nunca...');
    }, 0);
});

setTimeout(() => {
    console.log('Esto SI se verá...');
}, 0);

process.on('uncaughtException', (err, origen) => {
    console.error('Vaya! se nos ha olvidado capturar un error...');
    // console.error(err);
    setTimeout(() => {
        console.log('Esto viene de las excepciones...');
    }, 0);
});

funcionQueNoExiste();

console.log('Esto si el error no se recoge, no sale!');