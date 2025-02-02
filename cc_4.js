//Task 1: If Statements

//the line below is assigning a variable a number value
let purchaseAmount = 120;

//the lines below are using an if statement to give a discount only if the price is above 100
if (purchaseAmount > 100) {
    purchaseAmount *= .9;
};

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

//Task 3: While Loop

//the line below assigning the var "stock" a number value of 10
let stock = 10;

//the lines below run a while loop which subtracts 1 from the stock until it goes to 0
while (stock >= 0) {
    console.log(`The stock is ${stock}`);
    stock -= 1;
};

//Task 4: Do...While Loop

//the line below assigning var "responses" the number value 0
let responses = 0;

//the lines below are running a do...while loop which is adding 1 to the value of responses until it gets to 3
do {
    responses++
    console.log(`The response count is: ${responses}`);
} while (responses < 3);

//Task 5: For...In Loop

//the lines below are setting up an object named employee
let employee = {
    name: "Hulk",
    position: "Security",
    salary: 75000
};

//the lines below are running a for...in loop that logs each property inside the objects in the console
for (let property in employee) {
    console.log(`${property}: ${employee[property]}`);
};

//Task 6: For...Of Loop

//the line below creates an array named products and assign 3 products to it
let products = ["Playstation", "Monitor", "Controller"];

//the lines below use a for...of loop to log each product in the console
for (const element of products) {
    console.log(`Product: ${element}`);
};

//Task 7: forEach() Method

//the line below creates an array called orders with order IDs in it
let orders = [2251, 2252, 2253];

//the lines below use a forEach loop to log each order ID in the console
orders.forEach(order => {
    console.log(`Order ID: ${order}`);
});

//Task 8: Function Declaration

//the lines below run a function that calculates the tax amount by multiplying the price and tax rate
function calculateTax(amount, taxRate){
    return amount * taxRate;
};

//the lines below assign the variables a number value
let amount = 100;
const taxRate = 0.06;

//the line below is assigning the variable whatever the output of the function is
let taxAmount = calculateTax(amount, taxRate);

//the line below is logging the tax amount in the console
console.log(`The amount of tax is $${taxAmount}`);