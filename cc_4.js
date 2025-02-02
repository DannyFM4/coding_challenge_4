//Task 1: If Statements

//the line below is assigning a variable a number value
let purchaseAmount = 120;

//the lines below are using an if statement to give a discount only if the price is above 100
if (purchaseAmount > 100) {
    purchaseAmount *= .9;
}

//the line below is logging the final purchase amount using template literals
console.log(`Final amount after discount: $${purchaseAmount}`);