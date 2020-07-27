/*
// Seção de Declarações das variáveis 
            numero, fatorial, contador: inteiro
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
         escreval("Digite o número para calcular o fatorial: ")
         leia(numero)
         fatorial:= 1
         para contador de 1 ate numero faca
             fatorial:= fatorial * contador
         fimpara
         escreval("O fatorial de ", numero," é: ", fatorial)
*/

function acaoBotao() {
    var numero, fatorial
    numero = prompt("Digite o número para calcular o fatorial: ")
    fatorial = 1 
    for (var contador = 1; contador <= numero; comtador++) {
        fatorial = fatorial * contador
    }
    document.getElementById("paragrago").innerText = "O fatorial de " + numero + " é: " + fatorial
}
