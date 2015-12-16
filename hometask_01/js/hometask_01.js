/**
 * Created by oleksiy.konkin on 12/11/2015.
 */

// task 1
// Define several variables with different data type - number, boolean and array

var numericVar = 100;
var booleanVar = true;
var arrayVar = [1,2,3,4,5];

// task 2

// task 3
// Add new property "userName" to the object contains your first and last name

// task 4
// Define a method in the object from "task 2" that could increment a number property from this object

function MyObject(){
    this.numericVar = 1;
    this.booleanVar = true;
    this.arrayVar = [1, 2, 3, 4, 5];
}

MyObject.prototype.userName = "Alex Konkin";

MyObject.prototype.incNumValue = function (){
    if(this.numericVar < 10){
        this.numericVar+= 1;
    }
    else{
        this.numericVar = 0;
    }
};

MyObject.prototype.printUserName = function (){
  console.log(this.userName);
};

MyObject.prototype.numToSquare = function (aNumValue){
    var aNumber = aNumValue;
    if(typeof(aNumber) == "number"){
        return aNumber*aNumber;
    }
    else{
        return -1;
    }
};

MyObject.prototype.extractLastName = function (){
    var aLastName = this.userName.split(" ");
    return aLastName[1];
};


var myObject = new MyObject();
myObject.incNumValue();

console.log(myObject.userName);
console.log(myObject.numericVar);

// task 6
// Delete the boolean property
delete myObject.booleanVar;

console.log("booleanVar " + myObject.booleanVar);


// task 7
// Create the switch instruction with an expression using "typeof" operator
console.log("typeof and switch ");

for(var propt in myObject){
    switch(typeof(myObject[propt])){
        case "function":
            console.log(propt + ': ' + typeof(myObject[propt]));
        break;
        case "object":
            if(Array.isArray(myObject[propt]) === true){
                console.log("process array");
            }
        break;
        default:
            console.log(propt + ': ' + myObject[propt]);
        break;
    }
}

// task 8
// Change first three items of array from your object from "task 2" to the defined variables from "task 1" in the "default" case (overwrite them)

// ?

// task 9
// Write iteration instructions through the array from task 8 with the different ways you know. Point the one you prefer and describe why.
console.log("Task #9");

for (var cnt=0; cnt < myObject.arrayVar.length; cnt++){
    console.log(myObject.arrayVar[cnt]);
}

// task 10
// Write the iteration instruction that you prefer last task and iterate through the array from task 8. Inside your loop write a conditional instruction that allow to terminate it.
//
console.log("Task #10");

for (var cnt=0; cnt < myObject.arrayVar.length; cnt++){
    if(myObject.arrayVar[cnt] == 4)
        break;

    console.log(myObject.arrayVar[cnt]);
}

// task 11
// Write a function that display the property "userName" in the console (use Core.Print)
myObject.printUserName();

// task 12
// Add a new method to your object from task 2 that returns square of number that you get as a parameter of your method. Notice that the parameter may be absent or has not be a numeric type
console.log(myObject.numToSquare(4));
console.log(myObject.numToSquare("test"));



// task 14
// Write a function that returns your last name from the object property "userName"
console.log(myObject.numToSquare("test"));


// task 15
// Write a function that concatenate you last result from task 14 with the property "userName"
console.log(myObject.extractLastName());

// task 16
// Crete an array contains the following words: 'My', 'name', 'is'. Add to the end of the array the property "userName"
var stringArray = ["My","Name","is"];
stringArray.push(myObject.extractLastName());
console.log(stringArray.toString());

// task 17
// Add to the begging of the array an item "Hello world!"
stringArray.unshift("Hello world!");
console.log(stringArray.toString());

// task 18
// Try to connect items from the array into the one correct phrase
var aWords = stringArray.toString();
console.log(aWords);

// task 19
// Break this phrase into two parts that separate by '!'
var aResWords = aWords.replace(/,/g,"!");
console.log(aResWords);

// task 20
// Remove the first item from the resulting array.
stringArray.shift();
console.log(stringArray);

// task 21
// Remove your name from the last item in the array. Using string methods
stringArray.pop();
console.log(stringArray);

// task 22
// Break into parts the rest of the phrase so you have to get array like in the task 16
//

console.log(stringArray);

//
// task 23
// Sort the array from task 22 by alphabet
console.log(stringArray);
console.log(stringArray.sort().toString());

// task 24
// Add to the begging of the array from task 23 the property "userName"
stringArray.unshift(myObject.userName);
console.log(stringArray.toString());


