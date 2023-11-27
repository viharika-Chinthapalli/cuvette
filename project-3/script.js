const data = require('./food.json');


// list all the food items
let foodItems = data.forEach((items) => console.log(items));

// list all the food items with category vegetables
let vegetables = data.filter((item) => {
  return (item.category === "Vegetable");
})

console.log(vegetables);

// list all the food items with category fruit
let fruits = data.filter((item) => {
  return (item.category === "Fruit");
})

console.log(fruits);

// list all the food items with category protien
let proteins = data.filter((item) => {
  return (item.category === "Protein");
})

console.log(proteins);

// list all the food items with category nuts
let nuts = data.filter((item) => {
  return (item.category === "Nuts");
})

console.log(nuts);

// list all the food items with category grains
let grains = data.filter((item) => {
  return (item.category === "Grain");
})

console.log(grains);

// list all the food items with category dairy
let dairy = data.filter((item) => {
  return (item.category === "Dairy");
})

console.log(dairy);

// list all the food items with calorie above 100
let calorieAbove100 = data.filter((item) => {
  return (item.calorie > 100);
})

console.log(calorieAbove100);

// list all the food items with calorie below 100
let calorieBelow100 = data.filter((item) => {
  return (item.calorie < 100);
})

console.log(calorieBelow100);

// list all the food items with highest protien content to lowest
let sortedFoodItems = data.sort((a, b) => b.protiens - a.protiens);
sortedFoodItems.forEach((item) => console.log(item));

// list all the food items with lowest cab content to highest
let cab = data.sort((a, b) => a.cab - b.cab);
cab.forEach((item) => console.log(item));

