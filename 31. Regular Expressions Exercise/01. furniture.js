function furniture(input) {
  let totalSum = 0;
  console.log('Bought furniture:')
  for (let line of input) {
    if (line == "Purchase") {
      break;
    }
    let regex =
    />>(?<furniture>[A-Za-z\s]+)<<(?<price>\d+(.\d+)?)!(?<quantity>\d+)/g;
      let result = regex.exec(line);
      if(result){
          totalSum += (result.groups.price) * (result.groups.quantity);
          console.log(result.groups.furniture)
      }
  }
  console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}
furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
