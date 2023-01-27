
const myname = "Suyash Shekhar";
console.log(myname);


///// const
const arr = [];
console.log(arr);
arr.push("John");
console.log(arr);

/// let
let name1 = "JOHN";
console.log(name1);
name1 = "Alex";
console.log(name1);


/// var
var name2 = "JOHN";
console.log(name2);
var name2 = "Alex";
console.log(name2);



let myName = "Suyash";
let lastName = "Shekhar";
console.log(myname + " " + lastName);

//// string interpolation
console.log(`${myName} ${lastName}`);

/// functions

function addTwoNumbers(num1, num2){
    return num1+num2;
}

console.log(addTwoNumbers(5,6));


///arrow function

let sum = (num1,num2) => {
      return num1 + num2;
};



console.log(sum(8,2));


///Default parameter
function addTwoNumbers(num1 = 3, num2 = 5){
    return num1+num2;
}

console.log(addTwoNumbers(5,6));
console.log(addTwoNumbers());


//Rest and Spread Operator are applicable in arrays and Objects in JS
let array = [5, 10, 15, 20, 25];

// Spread operator
console.log(...array);
let newArray = [...array, 6, 7, 9];
console.log(...newArray);



//// rest operator
function maxNumber (...args){
    console.log(Math.max(...args));
}

maxNumber(5,7,8,10,255);


let maxOfNumbers = (...numbers) => {
    let maximum = Number.MIN_VALUE;
    for(let number of numbers){
        maximum = Math.max(maximum, number);
    }
    return maximum;
};


console.log(maxOfNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


/// Object

let object = {
    name : "John",
    age : "24",
    city : "New York", 
    address : {
        city : "New Delhi",
        road : "Gandhi road"
    }
};


let object2 = {...object, country: "USA"} ;

object2.address.city = "Mumbai";
console.log(object2);
console.log(object);
