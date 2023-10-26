// SYNTHAX
// function name(parameter1, parameter2 /* could be more */) {
// }// code to executed
function display(msg) { // msg is the parameter
    console.log(msg)
}

// The literal "Howdy" is the argument
display("Howdy");
// The literal "Ya'll come back..." is the argument
display("Ya'll come back now, ya hear!");

// x is the argument
let x = "Tackle it Tuesday";
display(x);

// EXERCISES 2
function displayNameAndAge(name, age){
    let message = name +"is"+ age;
    console.log(message)
}
// elsewhere
let someName = "Ezra";
let someAge = 17;

displayNameAndAge(someName, someAge);

someName = "Ian";
someAge = 16;
displayNameAndAge(someName, someAge);
