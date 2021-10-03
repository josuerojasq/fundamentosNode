console.time('Todo');
let suma = 0;
console.time('bucle');
for (let i = 0; i < 100000000; i++) {
    suma += i;
}
// console.log(suma);
console.timeEnd('bucle');

let suma2 = 1;
console.time('bucle 2');
for (let j = 1; j < 99; j++) {
    suma2 *= j;
}
// console.log(suma2);
console.timeEnd('bucle 2');

console.time('asincrono');
console.log('Empieza el proceso asincrono');
asincrona()
    .then(() => {
        console.timeEnd('asincrono');
    })

console.timeEnd('Todo');

function asincrona() {
    return new Promise((resolve) => {
        setTimeout(function () {
            console.log('Termina el proceso asincrono');
            resolve();
        });
    });
}