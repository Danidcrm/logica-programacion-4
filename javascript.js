function serieFibonacci(n) {
    let fibonacciLista = [];

    for (let i = 0; i < n; i++) {
        if (i <= 1) {
            fibonacciLista.push(i);
        } else {
            fibonacciLista.push(fibonacciLista[i - 1] + fibonacciLista[i - 2]);
        }
}
return fibonacciLista;

}
let numero = prompt("Ingrese un número: ");
numero = parseInt(numero); 
if (!isNaN(numero) && numero > 0) {
    let resultado = serieFibonacci(numero);

console.log("Serie de Fibonacci para los primeros " + numero + " números:");
console.log(resultado.join(", "));
} else {
console.log("Por favor, ingrese un número válido y mayor que 0.");
}
let mensajeDom = document.getElementById("mensajeDom");
mensajeDom.innerHTML = "Serie de Fibonacci para los primeros " + numero + " números: " + serieFibonacci(numero);