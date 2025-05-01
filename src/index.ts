const createPizza = () => {
  const initialPizza = {
    ingredients: ["cheese"],
    price: 74,
    size: "Normal",
  };

  let pizza = initialPizza;

  const builder = {
    addTopping: (topping: string) => {
      pizza.ingredients.push(topping);
      pizza.price += 5;

      return builder;
    },

    addExtraCheese: () => {
      pizza.ingredients.push("extra cheese");
      pizza.price += 10;

      return builder;
    },

    addWholegrainCrust: () => {
      pizza.ingredients.push("wholegrain crust");
      pizza.price += 20;

      return builder;
    },

    addFamilySize: () => {
      pizza.size = "Family";
      pizza.price += 30;

      return builder;
    },

    build: () => {
      console.log(`Current pizza: ${JSON.stringify(pizza)}`);
      return pizza;
    },

    reset: () => {
      pizza = initialPizza;
      return builder;
    },
  };

  return builder;
};

createPizza()
  .addTopping("mushroom")
  .addTopping("onion")
  .addTopping("beef")
  .addExtraCheese()
  .addFamilySize()
  .addWholegrainCrust()
  .build();
