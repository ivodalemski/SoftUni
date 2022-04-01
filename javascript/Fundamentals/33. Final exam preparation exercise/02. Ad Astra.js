function solve(input) {
  const NEED_DAILY_CAL = 2000;
  let str = input[0];
  let pattern =
    /([#]|[\|])(?<itemName>[A-Za-z\s]+)\1(?<expirationDate>[0-9]{2}[\/][0-9]{2}[\/][0-9]{2})\1(?<caloriesNum>[0-9]{1,5})\1/g;

  let match = null;
  let totalCalories = 0;
  let provisions = [];

  while ((match = pattern.exec(str))) {
    totalCalories += Number(match.groups.caloriesNum);
    let name = match.groups.itemName;
    let expirationDate = match.groups.expirationDate;
    let calories = match.groups.caloriesNum;
    provisions.push(
      `Item: ${name}, Best before: ${expirationDate}, Nutrition: ${calories}`
    );
  }
  let days = Math.floor(totalCalories / NEED_DAILY_CAL);
  console.log(`You have food to last you for: ${days} days!`);
  console.log(provisions.join("\n"));
}
solve([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);

console.log(`----------`);

solve(["Hello|#Invalid food#19/03/20#450|$5*(@"]);

console.log(`--------`);

solve([
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);
