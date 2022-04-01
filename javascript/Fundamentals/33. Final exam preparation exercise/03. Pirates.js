function pirates(input) {
  let cities = {};
  let command = input.shift();
  while (command != "Sail") {
    let tokens = command.split("||");
    let city = tokens[0];
    let population = Number(tokens[1]);
    let gold = Number(tokens[2]);

    if (!cities.hasOwnProperty(city)) {
      cities[city] = [population, gold];
    } else {
      cities[city][0] += population;
      cities[city][1] += gold;
    }
    command = input.shift();
  }
  command = input.shift();
  while (command != "End") {
    let tokens = command.split("=>");
    let curr = tokens[0];
    let city = tokens[1];
    let people = tokens[2];
    let gold = tokens[3];

    if (curr == "Plunder") {
      console.log(
        `${city} plundered! ${gold} gold stolen, ${people} citizens killed.`
      );
      cities[city][0] -= Number(people);
      cities[city][1] -= Number(gold);

      if (cities[city][0] <= 0 || cities[city][1] <= 0) {
        if (cities[city][0] < 0) {
          people = Number(people) + Number(cities[city][0]);
        } else if (cities[city][1] < 0) {
          gold = Number(gold) + Number(cities[city][1]);
        }
        delete cities[city];
        console.log(`${city} has been wiped off the map!`);
      }
    } else if ((curr = "Prosper")) {
      let amountOfGold = Number(people);
      if (amountOfGold > 0) {
        cities[city][1] += amountOfGold;
        console.log(
          `${people} gold added to the city treasury. ${city} now has ${cities[city][1]} gold.`
        );
      } else {
        console.log("Gold added cannot be a negative number!");
      }
    }
    command = input.shift();
  }
  let citiesToPrint = Object.values(cities).length;
  if (citiesToPrint < 0) {
    console.log(
      "Ahoy, Captain! All targets have been plundered and destroyed!"
    );
  } else {
    console.log(
      `Ahoy, Captain! There are ${citiesToPrint} wealthy settlements to go to:`
    );
    Object.entries(cities).forEach((key) => {
      console.log(
        `${key[0]} -> Population: ${key[1][0]} citizens, Gold: ${key[1][1]} kg`
      );
    });
  }
}
pirates([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End",
]);
