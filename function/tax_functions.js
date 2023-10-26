// SOCIAL SECURITY TAX
function getSocSecTax(grosspay) {
    const sosTax = grosspay * 0.062;
    return sosTax;
}

// MEDICARE TAX
function getMedicareTax(grosspay) {
    const medicareTax = grosspay * 0.0145;
    return medicareTax;
}



// FEDERAL TAX
function getFederalTax(grosspay, witholdingCode) {
    let rate = 0;
    if(witholdingCode == 0){
        rate = 0.23
    }
    else if(witholdingCode == 1){
        rate = 0.21
    }
    else if(witholdingCode == 2){
        rate = 0.195
    }
    else if(witholdingCode == 3){
        rate = 0.185
    }
    else if(witholdingCode >=4){
        rate = 0.18;
        over = witholdingCode - 4;
        rate = over * 0.005

    }
    return grosspay * rate

}

let pay = 750;
let code = 0;
console.log("Social Security Tax: $" + getSocSecTax(pay).toFixed(2))
console.log("Medicare Tax: $" + getMedicareTax(pay).toFixed(2))
console.log("Federal Tax: $" + getFederalTax(pay,code ).toFixed(2))

 pay = 1550;
 code = 2;
console.log("Social Security Tax: $" + getSocSecTax(pay).toFixed(2))
console.log("Medicare Tax: $" + getMedicareTax(pay).toFixed(2))
console.log("Federal Tax: $" + getFederalTax(pay,code ).toFixed(2))

 pay = 1100;
 code = 6;
console.log("Social Security Tax: $" + getSocSecTax(pay).toFixed(2))
console.log("Medicare Tax: $" + getMedicareTax(pay).toFixed(2))
console.log("Federal Tax: $" + getFederalTax(pay,code ).toFixed(2))