function sum(first, second){
    let result = 0;
    let num1 = Number(first);
    let num2 = Number(second);
    for(let i = num1; i <= num2; i++){
        result += i;
    }
    console.log(result);
}
sum(1, 5)