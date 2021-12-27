
function comparacao(num1, num2){
    
    const saoIguais = num1 === num2;
    const soma = num1 + num2;
    const somaMaiorNum1 = soma > num1;
    const somaMaiorNum2 = soma > num2;

    if(saoIguais){
        alert(`Os números são iguais!`);
    } else {
        alert (`Os números ${num1} e ${num2} são diferentes!`);
    }
    const messagem = (somaMaiorNum1? `A soma é maior que ${num1}`:`A soma é menor que ${num1}`) + (somaMaiorNum2? ` e maior que ${num2}`:` e menor que ${num2}`);
    alert(messagem);
    return
    
}
let num1 = Number(prompt("Insira o primeiro valor:"));
let num2 = Number(prompt("Insira o segundo valor:"));

comparacao(num1, num2);