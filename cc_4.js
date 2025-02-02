//Task 1: If Statements

//the line below is assigning a variable a number value
let purchaseAmount = 120;

//the lines below are using an if statement to give a discount only if the price is above 100
if (purchaseAmount > 100) {
    purchaseAmount *= .9;
}

//the line below is logging the final purchase amount using template literals
console.log(`Final amount after discount: $${purchaseAmount}`);

//Task 2: For Loop

//assigning the variale "sales" an array of numbers
let sales = [25, 40, 55, 60, 75];
let total = 0; // assigning variable the value 0

//the lines below run a for loop to add ach number in the sales array and stops when it gets to the last number of the array
for (let i = 0; i < sales.length; i++) {
    total += sales[i];
};

// the line below using template literals to log the value of total in the console
console.log(`The total sales is $${total}`);