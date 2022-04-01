function heroes(input) {
  let heroesCount = input.shift();
  let heroes = {};

  while (heroesCount != 0) {
    let tokens = input.shift().split(" ");
    let name = tokens[0];
    let hp = Number(tokens[1]);
    let mana = Number(tokens[2]);
    heroes[name] = [hp, mana];
    heroesCount--;
  }

  let tokens = input.shift().split(" - ");

  while (tokens != "End") {
    let command = tokens[0];
    let hero = tokens[1];

    if (command == "CastSpell") {
      let manaNeeded = tokens[2];
      let spellName = tokens[3];
      if (heroes[hero][1] >= manaNeeded) {
        heroes[hero][1] -= manaNeeded;
        console.log(
          `${hero} has successfully cast ${spellName} and now has ${heroes[hero][1]} MP!`
        );
      } else {
        console.log(`${hero} does not have enough MP to cast ${spellName}!`);
      }
    } else if (command == "TakeDamage") {
      let damageTaken = tokens[2];
      let attacker = tokens[3];
      if (heroes[hero][0] > damageTaken) {
        heroes[hero][0] -= damageTaken;
        console.log(
          `${hero} was hit for ${damageTaken} HP by ${attacker} and now has ${heroes[hero][0]} HP left!`
        );
      } else {
        console.log(`${hero} has been killed by ${attacker}!`);
        delete heroes[hero];
      }
    } else if (command == "Recharge") {
      let amount = Number(tokens[2]);
      if (Number(heroes[hero][1]) + amount > 200) {
        let rechargedFor = Math.abs(
          200 + amount - (amount + Number(heroes[hero][1]))
        );
        heroes[hero][1] = 200;
        console.log(`${hero} recharged for ${rechargedFor} MP!`);
      } else {
        heroes[hero][1] += amount;
        console.log(`${hero} recharged for ${amount} MP!`);
      }
    } else if (command == "Heal") {
      let healFor = Number(tokens[2]);
      let healing = healFor + Number(heroes[hero][0]);
      if (healing > 100) {
        let razlika = Math.abs(
          healFor + Number(heroes[hero][0]) - (100 + healFor)
        );
        heroes[hero][0] = 100;
        console.log(`${hero} healed for ${razlika} HP!`);
      } else {
        heroes[hero][0] += healFor;
        console.log(`${hero} healed for ${healFor} HP!`);
      }
    }

    tokens = input.shift().split(" - ");
  }

  let result = Object.entries(heroes);
  for (let curr of result) {
    console.log(curr[0]);
    let arr = curr[1];
    let hp = arr[0];
    let mana = arr[1];
    console.log(`  HP: ${hp}`);
    console.log(`  MP: ${mana}`);
  }
}
heroes([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
]);
console.log("--------");
heroes([
  "4",
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
]);
