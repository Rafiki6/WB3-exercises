let inputs= "Rwanda,Kigali,Burundi,Congo,Uganda,Kampala";
let array= inputs.split(",");
let i;
for(i=0; i<6 ;i++){
    console.log(array[i]);

}
// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.
let input= "Rwanda,Kigali,Burundi,Congo,Uganda,Kampala";
let part = input.substr(7, 6);
console.log(part)

// JavaScript String substring()
// substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().
let str= "Rwanda,Kigali,Burundi,Congo,Uganda,Kampala";
let part1 = input.substring(7,13)
console.log(part1)

// JavaScript String slice()
// slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: start position, and end position (end not included).
let str1= "Rwanda,Kigali,Burundi,Congo,Uganda,Kampala";
let part2 = input.substring(0,6)
console.log(part2)

// Replacing String Content
// The replace() method replaces a specified value with another value in a string:
let str2= "Rwanda,Kigali,Burundi,Congo,Uganda,Kampala";
let part3 = str2.replace("Rwanda","USA")
console.log(part3)

// JavaScript String ReplaceAll()
// In 2021, JavaScript introduced the string method replaceAll()
let str3= "Rwanda,Rwanda,Burundi,Congo,Uganda,Kampala";
let part4 = str3.replace(/Rwanda/g,"USA")
console.log(part4)