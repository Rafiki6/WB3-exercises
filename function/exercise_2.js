// // "use strict"; the out put is 7
// function test1() {
//  let a = 10;
//  if (a > 5) {
//  a = 7;
//  }
//  console.log("a = " + a);
// }
// test1();
 
// // "use strict";
// function test2A() {
//  if (1 == 1) {
//  var a = 5;
//  }
//  console.log("a = " + a);
// }
// test2A();
// // "use strict";
// // function test2B() {
// //  if (1 == 1) {
// //  let a = 5;
// //  }
// //  console.log("a = " + a);
// // }
// // test2B();
// // "use strict";
// let a = 4;
// function test3() {
//  a = 3;
//  console.log("a = " + a);
// }
// console.log("a = " + a);
//  test3();
// console.log("a = " + a);

// // "use strict";
// let b = 4;
// function test4() {
//  let b= 7;
//  console.log("a = " + b);
// }
// console.log("a = " + b);
// test4();
// console.log("a = " + b);

// // "use strict";
// let c = 4;
// function test5() {
//  c = 7;
//  function again() {
//  let c = 8;
//  console.log("a = " + c); 
//  }
//  again();
//  console.log("a = " + c); 
// }
// test5();
//  console.log("a = " + c);

//  "use strict";
let d = 4;
function test6() {
 let d = 7;
 function again() {
 let d = 8;
 console.log("a = " + d); 
 }
 again();
 console.log("a = " + d); 
}
test6();
console.log("a = " + d);




