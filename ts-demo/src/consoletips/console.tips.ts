import { assert, clear } from "console";

//Console Log
console.log("Hola");

let lista = ["Uno", "Dos", "Tres"]
lista.forEach(_ => console.log)

let nombre = "Martín"
console.log(`Hola, ${nombre}`);

//Console Clear
console.clear()

//Console Assert
var a = 100
console.assert(a === 1000, "Mensaje", `Otro mensaje: ${a}`)

//Console Count
function contador(texto: string) {
    console.count(texto)
}

contador("Hola")//1
contador("Adiós")//1
contador("Hola")//2

console.countReset()//reseteo del contador

//Console Info, Warn o Error
console.info("Texto Informativo")
console.warn("Texto de aviso");
console.error("Texto de error");

//Console Trace
function uno() {
    dos()
}

function dos() {
    tres()
}

function tres() {
    console.trace()//Trazar por donde se ha ido ejecutando para llegar a este punto
}

uno()//Inicia el trace por consola

//Console DIR --> Mostrar alores de objetos de manera bonita
let coche = {
    nombre: "Audi",
    matricula: "816273",
    especificaciones: [
        { motor: "v12", potencia: "300CV" }
    ]
}
console.dir(coche)

//Console Table --> Mostrar objetos o listas en tablas
console.table(coche)

//Console.time --> Contabilizar el tiempo de ejecución
function espera() {
    for (let index = 0; index < 1000; index++) {
        //...
    }
}

console.time("Prueba")//inicia el cronómetro
espera()
console.timeEnd("Prueba")//terminar y contabilizar el tiempo que ha pasado

//Console.group ---> Agrupaciones de consola
console.group("Números")
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.groupEnd()