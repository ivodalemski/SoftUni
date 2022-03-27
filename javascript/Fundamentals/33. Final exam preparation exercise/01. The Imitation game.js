function imitation(input) {
  let text = input.shift();
  let tokens = input.shift().split("|");
  while (tokens != "Decode") {
    let command = tokens[0];
    if (command == "Move") {
      let cutted = text.substring(0, tokens[1]);
      text = text.substring(tokens[1], text.length);
      text = text + cutted;
    } else if (command == "Insert") {
      text =
        text.substring(0, tokens[1]) +
        tokens[2] +
        text.substring(tokens[1], text.length);
    } else if (command == "ChangeAll") {
      let replace = tokens[1];
      let replaceWith = tokens[2];
      while (text.includes(replace)) {
        let temporaryMessage = text.replace(replace, replaceWith);
        text = temporaryMessage;
      }
    }
    tokens = input.shift().split("|");
  }
  console.log(`The decrypted message is: ${text}`);
}
imitation(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
