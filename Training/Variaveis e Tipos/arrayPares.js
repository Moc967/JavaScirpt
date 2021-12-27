function substituiPares(){
    var array = [1,2,3,4,5,6,7,8,9,10];
    console.log(array);
    var novoArray = [];
    for(var i = 0; i < array.length; i++){
        if(array[i] % 2 == 0){
            novoArray.push(0);
        }else{
            novoArray.push(array[i]);
        }
    }
    return novoArray;
}

console.log(substituiPares());