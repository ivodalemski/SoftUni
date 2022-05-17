function stringLength(first, second, third){
    let firstLength = Number(first.length);
    let secondLength = Number(second.length);
    let thirdLength = Number(third.length);
    let sum = firstLength + secondLength + thirdLength;
    console.log(sum);
    console.log(Math.trunc(sum / 3))
}
stringLength('chocolate', 'ice cream', 'cake')