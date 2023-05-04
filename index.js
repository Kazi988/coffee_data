// I used both console.log and console.table.
const coffeeMenu = require("./coffee_data");




// This is the 2nd prompt.
// Create a function that returns an array with drink names.
// use the .map() method to give an array at the end.
const drinks = (item) => {
  return item.name;
};

const drinks2 = coffeeMenu.map(drinks);
console.log(drinks2);

// This is the 3rd prompt
// Print an Array of drinks that cost 5 and under.
// I am practicing using one line arrow function

const fiveandUnder = (item) => [item.price] <= 5;
const fiveandunder2 = coffeeMenu.filter(fiveandUnder);
console.table(fiveandunder2);

// This is the 4th prompt.
// Print an array of drinks that are price at an even number.

const evennumber = (item) => {
  return item.price % 2 === 0;
};

const evennumber2 = coffeeMenu.filter(evennumber);
console.table(evennumber2);


// This is the 5th prompt
// Print the total cost if you were to order one of every drink


const allprices = (item) => {
    return item.price
}
const allprices2 = coffeeMenu.map(allprices);
console.log(allprices2);

const sumtotal = (accum, value) => {
    return accum + value;
}
const totalcost = allprices2.reduce(sumtotal);
console.log(totalcost); // ===> total cost is 64


// This is 6th prompt.
// Print an array where all the drinks are seasonal

const seasonalDrink = (item) => {
    return item.seasonal === true;
}

const seasonalDrink2 = coffeeMenu.filter(seasonalDrink);
console.log(seasonalDrink2);



// This is the 7th prompt
// Print all the seasonal drinks with words "with imported beans" after the item name. For example: "affogato with imported beans".



    
coffeeMenu.forEach(drink => {
    if (drink.seasonal) {
      console.log(drink.name + " with imported beans");
    }
  });


