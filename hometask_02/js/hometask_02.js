/**
 * Created by admin on 2/15/2016.
 */
// Write a function that takes a single argument (a string) and returns the string reversed.
var str="Write a function that takes a single argument and returns the string reversed";

function reverseString(aStr) {
    //return aStr.split('').reverse().join('');
    var arr= aStr.split(' ');
    aStr = arr.reverse().toString().split(',').join(' ');
    return aStr;

}

console.log(str);
console.log(reverseString(str));

// Write a function that takes an array of numbers and returns the minimum value
var values = [40, 100, 1, 5, 25, 10];

function findMinValue(values) {
    return Math.min.apply(null, values);
}

console.log(findMinValue(values));

// Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
var arrayOfDuplicates = [0, 0, 1, 5, 1, 2, 3, 1, 1, 0, 4, 4];

function findDistinctValues(values) {
    var resultingArray = [];
    for (n=0;n < values.length; n++){
        if(resultingArray.indexOf(values[n]) == -1){
            resultingArray.push(values[n])
        }
    }
    return resultingArray;
}

console.log(findDistinctValues(arrayOfDuplicates).toString());

// Write a function that logs the numbers from 1 to 100 to the console.
// For multiples of three print "Fizz" instead of the number.
// For multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
function doFizzBuzz() {
    for (n=1; n <=100; n++){
        if ((( n % 3) == 0) && (( n % 5) == 0)){
            console.log("FizzBuzz");
        }
        else if (( n % 3) == 0){
            console.log("Fizz");
        }
        else if (( n % 5 ) == 0){
            console.log("Buzz");
        }
        else {
            console.log(n);
        }
    }
}

doFizzBuzz();

// You have a master array of strings, where each element is a fruit name.
// You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
// For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
// Write the function that will remove the values contained in fruitsToRemove from the array fruits.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var fruitsToRemove = ["Banana", "Mango"];
function removeFruits(array, arrayToRemove) {
    var index;
    for(n=0; n < arrayToRemove.length ;n++ ){
        index = array.indexOf(arrayToRemove[n]);
        if( index >= 0){
            array.splice(index, 1);
        }
    }
}

removeFruits(fruits, fruitsToRemove);
console.log(fruits.toString());

// Write a function to push either a simple value or an array of values onto a specified array.
// For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
// If toPush is a simple value, it should be pushed onto array as an element.
// If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
var intValue = 1;
var stringValue = "string";
var arrValue = [1,2,3,4];
var resultingArray = [];
function pushOntoArray(array, toPush) {
    array.push(toPush);
}

pushOntoArray(resultingArray, intValue);
pushOntoArray(resultingArray, stringValue);
pushOntoArray(resultingArray, arrValue);

console.log(resultingArray.toString());

// Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
var stringOne = "Given a string write some code that will split this string using comma as your delimiter";
var stringTwo = "";
function splitListStrUsingComma(sourceStr) {
    var resultingArray = [];
    if(sourceStr.length == 0){
        return resultingArray;
    }
    else{
        resultingArray = sourceStr.split(" ");
        return resultingArray;
    }
}



console.log("result: "+(splitListStrUsingComma(stringOne)).toString());
console.log("result: "+(splitListStrUsingComma(stringTwo)).toString());

// Write a function that will take any number of arguments and return their sum
function sum() {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(sum(1,2,3,4,5,6));

// Write a function that will return true if a specified string consists of only whitespace.
var testStringOne = "          ";
var testStringTwo = "     test";

function isOnlyWhitespace(sourceStr) {
    var testArray = sourceStr.split("");
    var result = false;
    for (n=0; n < testArray.length; n++){
        if(testArray[n] == ' '){
            result = true;
        }
        else{
            result = false;
            break;
        }
    }
    return result;
}

console.log(isOnlyWhitespace(testStringOne));
console.log(isOnlyWhitespace(testStringTwo));
