// solucão para string de apenas uma palavra

function verificaPalindromo (string){
    if(!string) return "string inexistente";

    return string.split('').reverse().join('') === string ? console.log('É palindromo') : console.log('Não é palindromo'); 
}

verificaPalindromo('arara');

// solução para string de mais de uma palavra

function verificaPalindromo2 (string){
    if(!string) return "string inexistente";

    let stringArray = string.split('');
    console.log(stringArray);
    let stringArrayReverse = stringArray.reverse();
    console.log(stringArrayReverse);
    let stringReverse = stringArrayReverse.join('');
    console.log(stringReverse);

    return stringReverse === string ? console.log(`${string} é palindromo`) : console.log(`${string} não é palindromo`); 
}

verificaPalindromo2('arara anda');

