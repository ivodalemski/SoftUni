function mirrorWords(input) {
  let text = input[0];
  let pattern = /([@|#])([A-Za-z]{3,})\1{2}([A-Za-z]{3,})\1/g;
  let counter = 0;
  let matches = [];

  let match = pattern.exec(text);

  while (match != null) {
    counter++;

    let word1 = match[2];
    let word2 = match[3];
    let reversed = word2.split("").reverse().join("");

    if (word1 == reversed) {
      matches.push(`${word1} <=> ${word2}`);
    }

    match = pattern.exec(text);
  }

  if (counter > 0) {
    console.log(`${counter} word pairs found!`);
  } else {
    console.log("No word pairs found!");
  }
  if (matches.length > 0) {
    let result = matches.join(", ");
    console.log("The mirror words are:")
    console.log(result);
  } else {
    console.log("No mirror words!");
  }
}
mirrorWords([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
console.log("-----");
mirrorWords(["#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@"]);
console.log("------");
mirrorWords(["#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"]);
