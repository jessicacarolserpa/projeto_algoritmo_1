/*
         valor01, valor02, resultado: real
            operacao: caractere
            
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
         escreval("Digite o primeiro valor: ")
         leia(valor01)
         escreval("Digite a operação: Ex +,_,*,/")
         leia(operacao)
         escreval("Digite o segundo valor: ")
         leia(valor02)
         
         se operacao = "+" entao
            resultado := valor01 + valor02
         senao
            se operacao = "-" entao
            resultado := valor01 - valor02
            senao
                se operacao = "*" entao
                resultado := valor01 * valor02
                senao
                  se operacao = "/" entao
                  resultado := valor01 / valor02
                  fimse
                fimse
            fimse
         fimse
         escreval("Resultado do calculo é: ", resultado)
         */

function acaoBotao(params) {
    var valor01, valor02, resultado, operacao
    valor01 = prompt("Digite o primeiro valor: ")
    operacao = prompt("Digite a operação: EX: +,-,*,/")
    valor02 = prompt("Digite o segundo valor: ")
    
    if(operacao == "+"){
        resultado = parseInt(valor01)+parseInt(valor02)
    }else if(operacao == "-"){
        resultado = parseInt(valor01)-parseInt(valor02)
    }else if(operacao == "*"){
        resultado = parseInt(valor01)*parseInt(valor02)
    }else if(operacao == "/"){
        resultado = parseInt(valor01)/parseInt(valor02)
    }
    document.getElementById("paragrafo").innerText = resultado
}


