function sameNumbers(input) {
  let toString = input.toString();
  let isTrue = true;
  let sum = 0;
  for (let i = 0; i < toString.length; i++) {
    if (toString[i + 1] < toString.length) {
      if (toString[i] == toString[i + 1]) {
        continue;
      } else {
        isTrue = false;
        break;
      }
    }
  }
  for(let i = 0; i < toString.length; i++){
      sum += Number(toString[i]);
  }
  if (isTrue) {
    console.log("true");
  } else {
    console.log("false");
  }
  console.log(sum)
}
sameNumbers(2222222);
sameNumbers(1234);
