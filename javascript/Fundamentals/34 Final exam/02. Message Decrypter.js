function message(input) {
  let n = input.shift();
  let pattern = /^([$%])(?<tag>[A-Z][a-z]{2,})\1: (?<numbers>(\[[0-9]+]\|){3})$/m;


  for (let line of input) {
      validLine = line.match(pattern);
      if (validLine != null) {
          let sum = '';
          let tag = validLine.groups['tag'];
          let numbers = validLine
              .groups['numbers'];
          numbers = numbers
              .slice(1, numbers.length - 2)
              .split(']|[');
          for (let number of numbers) {
              sum += String.fromCharCode(number);

          }
          console.log(`${tag}: ${sum}`);
      } else console.log('Valid message not found');
  }
}
message([
  "4",
  "$Request$: [73]|[115]|[105]|",
  "%Taggy$: [73]|[73]|[73]|",
  "%Taggy%: [118]|[97]|[108]|",
  "$Request$: [73]|[115]|[105]|[32]|[75]|",
]);
console.log("------");
message([
  "3",
  "This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
  "$tAGged$: [97][97][97]|",
  "$Request$: [73]|[115]|[105]|true",
]);
