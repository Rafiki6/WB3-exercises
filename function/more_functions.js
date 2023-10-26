// 1. DISPLAY THE WHOLE ADDRESS
function displayMailingLabel(name, address, city, state, zip) {

    console.log(name)
    console.log(address)
    console.log(city + "," + state + " " + zip)


}
let name = "Rafiki";
let address = "9601 garden gable";
let city = "fort worth";
let state = "TX";
let zip = "76118";
displayMailingLabel(name, address, city, state, zip)
// ADD 2 NUMBERS
function addNumbers(num1, num2) {
    return num1 + num2;

}
r1 = addNumbers(6, 7);
w2 = addNumbers(10, 20);
console.log(r1);
console.log(w2)

function displayReceipt(totalDue, amountPaid) {
    const changeAmount = amountPaid - totalDue;
    console.log(`
        Total Due: $${totalDue}
        Amount Paid: $${amountPaid}
        Change Due: $${changeAmount}`

    )
}
displayReceipt(20.00, 30.00)
displayReceipt(5.00, 20.00)

// USE FUNCTION AND RETURNS
function getNumGrandKids(name) {
    let num = 0;

    if (name == "Diana") {
        num = 10
    }
    else if (name == "Karla") {
        num = 15
    }
    else if (name == "Rafiki") {
        num = 28;
    } return num
}
let num = getNumGrandKids("Diana")
console.log(num)
