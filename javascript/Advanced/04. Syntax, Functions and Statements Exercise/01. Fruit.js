function fruit(type, weight, price){
    let kilos = weight / 1000;
    let money = price * kilos;
    console.log(`I need $${money.toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${type}.`);
}
fruit('orange', 2500, 1.80)