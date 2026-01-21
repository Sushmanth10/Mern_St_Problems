//funvtions are the heart of javascript
//classic function / normal function
// function  add(numOne, numTwo)
// {
//     return numOne + numTwo;
// }

// function add(numOne, numTwo) {
//     let numThree = numOne + numTwo; 
//     return numThree;
// }

// function minusTwo (num){
//     let deductedValue = num - 2;
//     return deductedValue;
// }

// let numOne = 7;
// let numTwo = 9;
// let sumOfNumbers = add(numOne, numTwo);

// let result = minusTwo(sumOfNumbers);
// console.log(result);




// function takeCoffeeBeans() {
//     console.log("Taking coffee beans...");
// }

// function grindCoffeeBeans() {
//     console.log("Grinding coffee beans...");
// }

// function heatMilk() {
//     console.log("Heating milk...");
// }

// function takeMilk() {
//     console.log("Taking milk...");
// }

// function addOne(coffeeType) {
//     console.log(`Preparing your {espresso} coffee:`);
//     takeMilk();
//     takeCoffeeBeans();
//     grindCoffeeBeans();
//     heatMilk();
    
//     console.log(`{espresso} coffee is ready to serve!`);
// }


function boilmilk(milk){
    console.log("boiledmilk");
    {
    return "boiled"+milk;
    }}

function boilwater(water){
    console.log("boiledwater");
    {
        return "boiled"+water;
    }}

function groundcoffeebeans(coffeebeans){
    console.log("groundedcoffeebeans");
    {
        return "grounded"+coffeebeans;
    }}

function brewcoffee(boiledmilk,boiledwater,groundedcoffeebeans){
    console.log("brewingcoffee");
    {
        return "brewed"+groundedcoffeebeans+"with"+boiledmilk + "with" + boiledwater;
    }}

function preparecoffee(water,milk,coffeebeans){
    let boiledmilk = boilmilk(milk);
    let boiledwater = boilwater(water);
    let groundedcoffeebeans = groundcoffeebeans(coffeebeans);
    let brewedcoffee = brewcoffee(boiledmilk,boiledwater,groundedcoffeebeans);
    return brewedcoffee;
}

let coffee = preparecoffee("milk", "water", "coffeebeans");
    console.log("preparecoffee");

function servecoffee(brewedcoffee){
    console.log(brewedcoffee + "with sugar");{
return servecoffee(coffee);}}