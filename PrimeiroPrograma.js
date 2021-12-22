var parc1, parc2;
const descDez = 0.1;
const descVinte = 0.2;
const descCinquenta = 0.5;

function soma(parc1, parc2) {
    console.log(parc1 + parc2);
    return parc1 + parc2;
}

function returnEvenValues(array){
    let evenNums = [];
    for (let i =0; i< array.length; i++){
        if (array[i] % 2 == 0){
            evenNums.push(array[i]);
        } else {
            console.log(`${array[i]} não é par`);
        }
    }
    console.log("Os números pares são: ", evenNums);
}
let array=[1,2,3,4,5,6,7,8,9,10];
returnEvenValues(array);