/* Questão 1  */
/* Definimos a contanstante dobrar numeros  e colocamos a 5 razões, colocamos 
a seta padrão do arrow funtion assim não precisando chamar a função Return*/



const dobrarNumeros = (a, b, c, d, e) => a * 2 + "," + b * 2 + "," + c * 2 + "," + d * 2 + "," + e * 2;



/* Questão 2 */
/*  A gente define a função(OrdenarPalavras) para ordenar as palavras se baseando no comprimento dela,
na constante palavras puxamos o array para guardar as palavras da função, a outra constante serve 
organizar as palavras da outra constante e com a função desejada, e o console.log e para mostrar as palavras*/
function OrdenarPalavras() {
    const ordenarPorComprimento = (array) =>
        array.sort((x, y) => x.length - y.length)

    const palavras = ["Escola Sesi SENAI ", "Professor Icaro ", "Raquel ", "Izadora Benedetti"];

    const palavrasOrdenas = ordenarPorComprimento(palavras);
    console.log(palavrasOrdenadas);

}

/* Questão 3*/
/* */
var casa
var array = []

for (casa = 0; casa < 100; casa++) {
    array[casa] = casa + 1

}

console.log(array)

const pares = (array) => {
    return array.filter((value) => value % 2 == 0);
}

function mostrarPares() {
    console.log(filtrarPares(array))
}