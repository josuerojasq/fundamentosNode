const fs = require('fs');
const stream = require('stream');
const util = require('util');

// Stream de lectura
/* let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

readableStream.setEncoding('UTF8');
readableStream.on('data', function (chunk) {
    data += chunk;
});

readableStream.on('end', function () {
    console.log(data);
}); */


/**Streams de escritura */
// process.stdout.write('Hola');
// process.stdout.write('que');
// process.stdout.write('tal');
// process.stdout.write('amigo!');

let readableStream = fs.createReadStream(__dirname + '/input.txt');
const Transform = stream.Transform;

function Mayus() {
    Transform.call(this);
}
util.inherits(Mayus, Transform);

Mayus.prototype._transform = function (chunk, codif, callback) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    callback();
}

let mayus = new Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout);