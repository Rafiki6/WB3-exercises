// temperature from Celsius to Fahrenheit 
function convertCtoF(currentTemp){
    let FahrenheitTemp = (currentTemp * 1.8) + 32;
    return FahrenheitTemp;
}
let currentTemp = 98;
let FahrenheitTemp = convertCtoF(currentTemp);
console.log(FahrenheitTemp)