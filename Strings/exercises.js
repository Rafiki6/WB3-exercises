// USING INDEXOF AND LASTINDEX TO FIND OUT THE LOCATION OF THE STRING
let name = "Brenda Kaye";
let pos = name.indexOf(" ");
let pose = name.lastIndexOf(" ")
console.log(pos)

// SLICE () IS SIMILAR TO SUBSTRING() EXCEPT THAT IS ALSO SUPPORTS NEGATIVE INDEXES
let name1 = "Betty Jo Smalltree";
let mid = name1.slice(0, -13);
console.log(mid)
//
let ssn = "111-22-3333";
let first3 = ssn.substring(0, 3);
let second2 = ssn.substring(4, 6);
let last4 = ssn.substring(7, 11);
let ssnWithoutDashes = first3 + second2 + last4;
console.log(first3);
console.log(second2);
console.log(last4);
//
let partCode = "275656543-large";
let partNum, size;
let dashPos = partCode.indexOf("-");
partNum = partCode.substring(0, dashPos);
size = partCode.substring(dashPos + 1);
console.log(partNum);
console.log(size);
//
// using concatenation
let name2 = "Pursalane";
let age = 10;
let msg = "Student: " + name2 + " (age: " + age + ")";
console.log(msg)
// using template strings
let name3 = "Pursalane";
let age1 = 10;
let msg1 = `Student: ${name3} (age: ${age1})`;
console.log(msg1)
//
function stripHyphensFromSSN(ssn1) {
    let firstPart = ssn1.substring(0, 3);
    let secondPart = ssn1.substring(4, 6);
    let thirdPart = ssn1.substring(7);
    let ssnDigitString = firstPart + secondPart + thirdPart;
    return ssnDigitString;
}
// elsewhere
let ssn1 = "123-45-6789";
let ssnWithoutHyphens = stripHyphensFromSSN(ssn1);
console.log(ssnWithoutHyphens);
// TRIM() REMOVE THE WHITE SPACE
let s1 = " Hello World! ";
let s2 = s1.trim().toUpperCase();
console.log(s2)
console.log(s1)
// STRINGS AND ESCAPE CHARACTERS
let quote1 = 'In Texas, we use the word ya\'ll often';
let quote2 = "Big Tex (at the State Fair) says \"Howdy\"";
let quote3 = "\\Heading/";
console.log(quote3)

function stripHyphensFromPhone(phone){
    let nummber1 = phone.substring(0,5);
    let nummber2 = phone.substring(5,9)
    let nummber3 = phone.substring(9,13)
    return nummber1 + nummber2+ nummber3;
}
let pone = '(817)555-5555?'

console.log(stripHyphensFromPhone(pone))
// ACCESSING CHARACTERS IN A SRTING
let myString = "How now brown cow";
console.log(myString.charAt(3));
// ABILTY TO USE [] TO ACCESS A CHARACTER IN A STRING
let myString1 = "How now brown cow";
console.log(myString1[7]);

// EXTRACTING SUBSTRINGS

// console.log("First Name: "+ first);
// console.log("Last Name: "+ last);

// function getSupplier(code){
//     return code.slice(0, code.indexOf(":"));
// }
// that returns all characters before the :

// function getProductNumber(code){
//     return code.slice(code.indexOf(":") + 1, code.indexOf("-"));
// }
// // that returns all characters between the : and -
// function getSize(code){
//     return code.slice(code.indexOf("-") + 1);//NO SECOND ARGUMENT FOR WHERE TO STOP
// }
// that returns all characters after the -

// function prettyPrint(supplier, product, size){
//     if(size == "L"){
//         size = "large (L)"
//     }else if (size == "M"){
//         size = "medium (M)"
//     }
//     console.log(`the size ${size} part ${product} is supplied by ${supplier}`);
// }
// const part1 = "ACME:123-L"
// prettyPrint(getSupplier(part1), getProductNumber(part1), getSize(part1) );

// const part2 = "DI:12345-M"
// prettyPrint(getSupplier(part2), getProductNumber(part2), getSize(part2) );

// const part3 = "ACE:1-12"
// prettyPrint(getSupplier(part3), getProductNumber(part3), getSize(part3) );