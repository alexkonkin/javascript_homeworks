/**
 * Created by oleksiy.konkin on 12/11/2015.
 */

// task 1
// Define several variables with different data type - number, boolean and array

var numericVar = 100;
var booleanVar = true;
var arrayVar = [1,2,3,4,5];

// task 2
// Define an object of the object data type and define its properties with data types like in the "task 1"
var myObject = {};

Object.defineProperties(myObject, {
    "numericVar": {
        value: 11,
        writable: true
    },
    "booleanVar": {
        value: true,
        writable: true,
        configurable: true
    },
    "arrayVar": {
        value: [1,2,3],
        writable: true
    }
});

// task 3
// Add new property "userName" to the object contains your first and last name
myObject.userName = "Alex Konkin";

console.log(myObject.userName);

// task 4
// Define a method in the object from "task 2" that could increment a number property from this object
myObject.incNumValue = function (){
    this.numericVar+= 1;
};

myObject.incNumValue();
console.log(myObject.numericVar);

// task 5
// Extend or update this method so that it could check the number property and if it is more then 10 the value of the property should be reset to zero
myObject.incNumValue = function (){
    if(this.numericVar < 10){
        this.numericVar+= 1;
    }
    else{
        this.numericVar = 0;
    }
};

myObject.incNumValue();
console.log(myObject.numericVar);

// task 6
// Delete the boolean property
delete myObject.booleanVar;

console.log(myObject.booleanVar);

// task 7
// Create the switch instruction with an expression using "typeof" operator
// task 8
// Change first three items of array from your object from "task 2" to the defined variables from "task 1" in the "default" case (overwrite them)
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
            //console.log(propt + ': ' + myObject[propt]);
            myObject.numericVar = numericVar;
            myObject.arrayVar = arrayVar;
            break;
    }
}

// task 9
// Write iteration instructions through the array from task 8 with the different ways you know. Point the one you prefer and describe why.
for (var cnt=0; cnt < myObject.arrayVar.length; cnt++){
    console.log(myObject.arrayVar[cnt]);
}


// task 10
// Write the iteration instruction that you prefer last task and iterate through the array from task 8. Inside your loop write a conditional instruction that allow to terminate it.
//
for (var cnt=0; cnt < myObject.arrayVar.length; cnt++){
    if(myObject.arrayVar[cnt] == 4)
        break;

    console.log(myObject.arrayVar[cnt]);
}

// task 11
// Write a function that display the property "userName" in the console (use Core.Print)
myObject.printUserName = function (){
  console.log(this.userName);
};

// task 12
// Add a new method to your object from task 2 that returns square of number that you get as a parameter of your method. Notice that the parameter may be absent or has not be a numeric type
// task 13
// Add instruction into your method from task 12 that allows you to handle errors of converting data types and throw exception if something goes wrong
myObject.numToSquare = function (aNumValue){
    var aNumber = aNumValue;
    if(typeof(aNumber) == "number"){
        return aNumber*aNumber;
    }
    else{
        return -1;
    }
};

console.log(myObject.numToSquare(2));
console.log(myObject.numToSquare("test"));

// task 14
// Write a function that returns your last name from the object property "userName"
myObject.extractLastName = function (){
    var aLastName = this.userName.split(" ");
    return aLastName[1];
};

var str = myObject.extractLastName();

// task 15
// Write a function that concatenate you last result from task 14 with the property "userName"
myObject.concatUserName = function (aValue){
    return this.userName.concat(" "+aValue);
    //this.userName = "test1";
};

myObject.concatUserName(str);

console.log(myObject.concatUserName(str));

// task 16
// Crete an array contains the following words: 'My', 'name', 'is'. Add to the end of the array the property "userName"
var stringArray = ["My","Name","is"];
stringArray.push(myObject.userName);
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
aWords = aWords.replace(/,/g," ");
console.log(aWords);

// task 20
// Remove the first item from the resulting array.
stringArray.shift();
console.log(stringArray.toString());

// task 21
// Remove your name from the last item in the array. Using string methods
var str = stringArray[3];
var res = str.split(" ");
stringArray[3] = res[1];
console.log(stringArray.toString());

// task 22
// Break into parts the rest of the phrase so you have to get array like in the task 16
//
console.log(stringArray.toString());

//
// task 23
// Sort the array from task 22 by alphabet
console.log(stringArray);
console.log(stringArray.sort().toString());

// task 24
// Add to the begging of the array from task 23 the property "userName"
stringArray.unshift(myObject.userName);
console.log(stringArray.toString());


