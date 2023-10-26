// EXERCISES 1
function showName() {
    let name = "Brittany";
    console.log(name);
} //CANNOT ACCESS THE VARIABLE NAME HERE

// EXERCISE 2
let number = 5;
function test() {
    number = 6;
    console.log("++ " + number); 
}

console.log("** " + number);
test();
console.log("** " + number);//the output doesn't change when there's not let on line 10 get the same value
// EXERCISE 3
let number1 = 5;
function tests() {
 let number1 = 6;
 console.log("++ " + number1);
}
console.log("** " + number1);
tests();
console.log("** " + number1);//the output does change when there's let on line 10 get the dfferent value

// EXAMPLE 3
function addNums(a, b, c) {
    let sum;
    if (a < 0) {
    sum = Math.abs(a) + Math.abs(b) + Math.abs(c);
    }
    else {
    sum = a + b + c;
    }
    console.log(sum); // this displays 11
   }
   let x = addNums(-1, 3, 7);

   function addNums(a, b, c) {
    if (a < 0) {
    var sum = Math.abs(a) + Math.abs(b) + Math.abs(c);
    }
    else {
    let sum = a + b + c;
    }
    console.log(sum); // this generates an error
   }
   let y = addNums(-1, 3, 7)
   