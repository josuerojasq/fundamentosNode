// console.log(global);
// console.log(setInterval);
let i = 0;
let intervalo = setInterval(function () {
    console.log('Numero... ' + i);
    if (i === 7){
        clearInterval(intervalo)
    }
    i++;
}, 1000);

/* setImmediate(function () {
    console.log('Utilizo setImmediate...');
}); */

// console.log(process);

/* console.log(__dirname);
console.log(__filename); */

/* global.miVariable = 'elValor';

console.log(miVariable); */