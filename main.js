//Metodos de "Numbers"

//Metodo toPrecision, este metodo devuelve una cadena de texto de el numero con una precision especifica, es decir que el numero que se ponga como parametro es el numero de digitos que devolverá

let num = 5876.12354;

console.log(num.toPrecision(7));

//el resultado esperado es "5876.124"

console.log(num.toPrecision(3));

//el resultado esperado es "5.88e+3"