/* Typescript: is a syntactical superset of Javascript which adds static typing.

Set Up: npm install typescript --save-dev
         npx tsc
         npx tsc --init   */


//Basic Types: string, number, boolean and array.

//Two ways Typescript assigns a type: Explicit and Implicit

//Explicit Type:
let name: string = "Mamatha";
let num: number = 5;
let isDone: boolean = false;

//Implicit type: 
let names = "Mamatha";
let nums = 5;
let isDonee = true;

//arrays:

const nam : string[] = [];


//Special types: any

//any: any is a type that allows all types to be used.
let a: any = true;
a = "Mamatha";      //No error bcoz it can be any type

let b = true;
b = "Mamathaa"; // Error : string is not assignable to type boolean


//Functions:
function functionName(parameter1, parameter2){
    return ;
}

function addNum(num1:number, num2:number){
    return num1+num2;
}

function addNum(num1:number, num2:number):number {
    return num1+num2;
}


//Interface:
interface Car {
    name:string;
    year: number;
}

let cars: car = {
    name: "Audi",
    year: 1990
};


//Union types:

function printNum(code: string  | number){
       console.log(`${code}`) 
}
printNum(5);
printNum("5");






    

