/*  function elements(arr){
    let sum = arr.reduce((a, b) => a + b);
    console.log(sum);
    let sum2 = arr.map((a, b) => (1 / a) + (1 / b));
    console.log(sum2)
    let stringConc = arr.join("");
    console.log(stringConc);
} */
function elements(input) {
    let elements = input.map(Number);
    aggregate(elements, 0, (a, b)=>a + b);
    aggregate(elements, 0, (a, b)=>a + 1 / b);
    aggregate(elements, "", (a, b)=>a + b);
 
    
}

elements([1, 2, 3]);
elements([2, 4, 8, 16])