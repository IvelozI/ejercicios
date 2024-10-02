// valores dados
let valores = [500, 456, 510, 454, 520, 452, 800];

//variable de sumatoria
let suma = 0;

// Recorrer el arreglo y sumar cada valor
for (let i = 0; i < valores.length; i++) {
    suma += valores[i];
}

// Imprimir sumatoria
console.log("el resultado de la sumatoria es: " + suma);