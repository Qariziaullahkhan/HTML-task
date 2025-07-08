// let message = "Hello from script.js!";
// let anotherVariable = message;
// anotherVariable = "Changed value";
// anotherVariable.split(" ");
// console.log(`sahy hellow this ${message}`); 
// console.log(`sahy hellow this ${anotherVariable}`);
// let finalMessage = new String(message.replace("Hello", "Goodbye"));
// console.log(finalMessage.trim());  
// console.log(`Final message: ${finalMessage}`);

// console.log(`Final message length: ${finalMessage.length}`);
// console.log(eval("2 + 2") == eval ("4")); // Using eval to evaluate a simple expression
// const otherVariable = 123.896;
// console.log(`The value of otherVariable is: ${otherVariable.toPrecision(4)}`);
// const anothervalues = 10000;
// console.log(`The value of anothervalues is: ${anothervalues.toLocaleString('en-IN')}`);
// console.log(Math.random()); // Generates a random number between 0 and 1
// console.log(Math.floor(Math.random() * 100) + 1); // Generates a random integer between 1 and 100
// console.log((Math.floor(Math.random() * 100) + 1)); // Generates a random integer between 1 and 100 and converts it to hexadecimal
// const max = 10;
// const min = 20;
// console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Generates a random integer between min and max
// let myDate = new Date('2023-10-01T12:00:00Z'); // Creates a new Date object
// myDate.setFullYear(2023, 9, 1); // Sets the year
// console.log(`Current date and time: ${myDate}`); // Logs the current date and time
// let myDateString = myDate.toString();
// let  age = 18;
// let status = age >= 18 ? "adult":"not Adults";
// console.log(`You are ${status}`); // Logs the status based on age
let fruits = ["Apples", "Bananas", "Oranges"];
// fruits.push("Mangoes"); 
// fruits.pop();
// fruits.shift(); 
// fruits.unshift("Grapes");
// console.log(fruits.includes("Apples"));
// console.log(fruits.slice(1, 2));
// console.log(fruits.join(", "));
// console.log(Object.keys(fruits)); 
// console.log(fruits.length);
fruits.forEach((items,index) =>{
    console.log(' is ${items} and is ${index}');
});
