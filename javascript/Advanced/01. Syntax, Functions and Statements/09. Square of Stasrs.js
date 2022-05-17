function square(num) {
  let number = Number(num);

  for (let i = 0; i < number; i++) {
    let arr = [];
    for (let j = 0; j < number; j++) {
      arr.push("*");
    }
    console.log(arr.join(" "));
  }
}
square(7);
console.log("----------");
square(5);
