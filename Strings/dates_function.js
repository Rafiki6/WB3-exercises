// NEW DATE() USED TO DISPLAY THE EXACTLY DATE AND TIME 
let dt = new Date();
console.log(dt)

// U CAN TURN A DATE OBJECT INTO A STRING
let dt1 = new Date();
let dte = dt1.toString();
console.log(dte) 

// The TOUTCSTRING() METHOD WILL SHOW DATE/TIME IN A TEXT STRING AS
// A UTC TimeRanges(aka GMT tIME)
let d = new Date();
console.log(d.toUTCString());

// IF YOU WANT ONLY DATE, TODATESTRING() RETURNS ONLY THE DATE STRING.
let dt2 = new Date();
let dte1 = dt2.toDateString();
console.log(dte1)

// THERE ARE 3 FUNCTIONS THAT TAKE A DATE OBJECTS AND CONVERT
// IT TO A STRING ACCORDING TO THE CURRENT LOCAL SETTING ON MACHINE.
let dt3 = new Date();
let dte2 = dt3.toLocaleDateString();
let dte3 = dt3.toLocaleTimeString();
let dte4 = dt3.toLocaleString();
console.log(dte2);
console.log(dte3);
console.log(dte4);

// When I create the date this way, it thinks I'm in GMT 
// and it uses a 1-based month
let dat = new Date("2023-10-26");
// But when I print it out, the display adjusts for my 
// local time
console.log(dat.toString()); 
 // displays 
 // Wed May 10 2023 19:00:00 GMT-0500 (Central Daylight Time)
