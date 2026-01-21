const boilmilk = (milk) => {
    console.log("boiled milk");
    return "boiled" + milk;
};

const boilwater = (water) => {
    console.log("boiled water");
    return "boiled" + water;
};

const groundcoffeebeans = (coffeebeans) => {
    console.log("grinding coffee beans");
    return "grinded" + coffeebeans;
};

const brewcoffee = (boiledmilk, boiledwater, groundedcoffeebeans) => {
    console.log("brewing coffee");
    return "brewed" + groundedcoffeebeans +"with" + boiledwater + "with" + boiledmilk;
};

const preparecoffee = (boiledmilk, boiledwater, groundedcoffeebeans) => {
    console.log("preparing coffee");
    return "prepared " + boiledmilk + "with " + boiledwater + "with " + groundedcoffeebeans;
}

const coffee = preparecoffee("milk", "water", "coffee beans");
console.log(coffee);

const servecoffee = (brewedcoffee) => {
    console.log(brewedcoffee + "is served with sugar");
}

servecoffee(coffee);