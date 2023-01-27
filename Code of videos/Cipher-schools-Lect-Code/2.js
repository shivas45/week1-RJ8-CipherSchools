/// .map()

let array = [5, 10, 15, 20];

let newArray = array.map((element) => {
       return element*element;
})

console.log(newArray);


/// forEach()

let arr = [1, 2, 3, 4, 5];
arr.forEach((element,index) => {
    element *= element;
    console.log(element);
})


/// .filter()

let array2 = [10, 20, 30, 40, 50];
let newArray2 = array2.filter((element) => {
     return element>= 30;
});

console.log(newArray2);


/// .find()
let temp = array2.find((value) => {
    return value>20;
});
console.log(temp);


/// .sort()

let array3 = [50, 40, 30, 20, 10];
let sortedarray = array3.sort();
console.log(array3);


let array4 = [50, 40, 30, 20, 10, 111];
let sortedarray1 = array4.sort((el1,el2) => {
    el1 = Number(el1);
    el2 = Number(el2);
    return el1 - el2;
});
console.log(array4);


/// Object destructuring
let myObject = {
    name: "Alex",
    age: "24",
    address: {
        street : "Brooklyn",
        city: "New York",
        state: "NY",
        country: "USA",
        pasportDetails : {
            passportNumber: "ABCD1234",
        },
    },
};

let passportNumber = myObject.address.pasportDetails.passportNumber;
console.log(passportNumber);

let {name, age} = myObject;
console.log(name, age);


// object matching

let obj1 = {name:"Shantanu"};
let obj2 = {name:"Shantanu"};

function isEqual(obj1, obj2){
    if(obj1 == obj2){
        return true;
    }

    if(Object.keys(obj1).length != Object.keys(obj2).length ){
        return false;
    }

    for(let key of Object.keys(obj1)){
        if( typeof obj2[key] === "undefined"){
            return false;
        }
        if(obj2[key] != obj1[key]){
            return false;
        }
    }
    return true;
}

console.log(isEqual(obj1,obj2));


// Map and Set
let map = new Map();
map.set(1, "Shantanu");
map.set(2, "Alex");
console.log(map);
map.values()


// set
let set = new Set();
set.add(1);
set.add(-1);
set.add(6);
let arr1 = [...set]
console.log(set);


// Class

class Animal{
    noOfLegs;
    color;
    family;
    sound;

    constructor(noOfLegs, color, family, sound){
        this.noOfLegs = noOfLegs;
        this.color = color;
        this.family = family;
        this.sound = sound;

    }

    showAnimal() {
        console.log("This animal belongs to family " + this.family);
    }
}


let animal = new Animal(4, "brown", "rodent", "something");
console.log(animal);
animal.showAnimal();