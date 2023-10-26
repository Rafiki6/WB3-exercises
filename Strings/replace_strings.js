// REPLACE 
let message = "Our corporate offices are located in Dallas";
let part = message.replace("Dallas","Austin");
console.log(part)

// Replacing String Content
// The replace() method replaces a specified value with another value in a string:
let str2= "Rwanda,Kigali,Burundi,Congo,Uganda,Kampala";
let part3 = str2.replace("Rwanda","USA")
console.log(part3)

// JavaScript String ReplaceAll()
// In 2021, JavaScript introduced the string method replaceAll()
let str3= "Rwanda,Rwanda,Burundi,Congo,Uganda,Kampala";
let part4 = str3.replace(/Rwanda/g,"USA")
console.log(part4);

// what if I create this right now
let d = new Date("2023-05-11"); 
console.log(d.toDateString()); 
 // displays Wed May 10 2023 
console.log(d.toISOString());
 // displays 2023-05-11T00:00:00Z