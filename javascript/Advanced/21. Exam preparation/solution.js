class VegetableStore {
  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];
  }

  loadingVegetables(vegetables) {
    let typeArr = [];

    for (let vegetable of vegetables) {
      let [type, quantity, price] = vegetable.split(" ");
      quantity = Number(quantity);
      price = Number(price);
      let product = this.availableProducts.find((v) => v.type == type);

      if (product == undefined) {
        this.availableProducts.push({ type, quantity, price });
        typeArr.push(type);
      } else {
        product.quantity += quantity;
        if (price >= product.price) {
          product.price = price;
        }
      }
    }
    return `Successfully added ${typeArr.join(", ")}`;
  }

  buyingVegetables(selectedProducts) {
    let totalPrice = 0;
    for (let some of selectedProducts) {
      let [type, quantity] = some.split(" ");
      let product = this.availableProducts.find((v) => v.type == type);
      if (product == undefined) {
        throw new Error(
          `${type} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      } else {
        if (quantity > product.quantity) {
          throw new Error(
            `The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(
              2
            )}.`
          );
        } else {
          totalPrice += quantity * product.price;
          product.quantity -= quantity;
        }
      }
    }
    return `Great choice! You must pay the following amount $${totalPrice.toFixed(
      2
    )}.`;
  }

  rottingVegetable(type, quantity) {
    let product = this.availableProducts.find((v) => v.type == type);
    if (product == undefined) {
      throw new Error(`${type} is not available in the store.`);
    } else {
      if (quantity >= product.quantity) {
        product.quantity = 0;
        return `The entire quantity of the ${type} has been removed.`;
      } else {
        product.quantity -= quantity;
        return `Some quantity of the ${type} has been removed.`;
      }
    }
  }

  revision() {
    let resArr = ["Available vegetables:"];
    this.availableProducts.sort((a, b) => a.price - b.price);
    this.availableProducts.forEach((v) =>
      resArr.push(`${v.type}-${v.quantity}-$${v.price}`)
    );
    resArr.push(
      `The owner of the store is ${this.owner}, and the location is ${this.location}.`
    );
    return resArr.join("\n");
  }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(
  vegStore.loadingVegetables([
    "Okra 2.5 3.5",
    "Beans 10 2.8",
    "Celery 5.5 2.2",
    "Celery 0.5 2.5",
  ])
);
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
