function string(input) {
  let sentence = input.shift();
 
  while (input[0] !== "Done") {
    let line = input.shift();
    line = line.split(" ");
    let command = line[0];
 
    if (command === "Change") {
      let char = line[1];
      let replacement = line[2];
      sentence = sentence.split(char).join(replacement);
      console.log(sentence);
    } else if (command === "Includes") {
      let substring = line[1];
      let included = sentence.includes(substring);
      if (included) {
        console.log("True");
      } else {
        console.log("False");
      }
    } else if (command === "End") {
      let substring = line[1];
      let endWith = sentence.endsWith(substring);
      if (endWith) {
        console.log("True");
      } else {
        console.log("False");
      }
    } else if (command === "Uppercase") {
      sentence = sentence.toUpperCase();
      console.log(sentence);
    } else if (command === "FindIndex") {
      let index = line[1];
      let findIndex = sentence.indexOf(index);
      console.log(findIndex);
    } else if (command === "Cut") {
      let startIndex = Number(line[1]);
      let count = Number(line[2]);
      let subst = sentence.slice(startIndex, count + startIndex);
      console.log(subst);
    }
  }
}
string([
  "//Th1s 1s my str1ng!//",
  "Change 1 i",
  "Includes string",
  "End my",
  "Uppercase",
  "FindIndex I",
  "Cut 5 5",
  "Done",
]);
console.log("-------");
string([
  "*S0ftUni is the B3St Plac3**",
  "Change 2 o",
  "Includes best",
  "End is",
  "Uppercase",
  "FindIndex P",
  "Cut 3 7",
  "Done",
]);
