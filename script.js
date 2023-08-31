'use strict';

function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    let output = `${firstName} ${sirName} is ${age} years old, born in ${birthYear} born in ${birthDistrict}, southern ${birthCountry}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millennial = true;
      const firstName = 'Lloyd';
      console.log(add(10, 7));
      const str = `Ohh!, you are a millennial, ${firstName} ${sirName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millennial);
    console.log(output);
    // console.log(add(10, 7));
  }
  printAge();

  return age;
}

const firstName = 'Alexander';
const sirName = 'Msumba';
const birthDistrict = 'Blantyre';
const birthCountry = 'Malawi';
calcAge(1983);
// cannot access outside global scope
//console.log(age);
//printAge()

// ===== HOISTING with variables

console.log(me);
// console.log(job);
// console.log(year);

var me = 'Alexander';
let job = 'Uber';
const year = 2023;

// ===== HOISTING with functions
console.log(addDec(2, 3));
// console.log(addExp(3, 4));
// console.log(addArrow(4, 5));

function addDec(a, b) {
  return a + b;
}

// the below 2 functions will throw an error 
const addExp = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// ============================= 
if (!numProducts) deleteShoppingCart()

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted");
}

var x = 2
let y = 2
const z = 7

// ====== the this keyword 
const alex = {
  names: "msumba",
  year: 1983,
  calcAge: function () {
    return  2023 - this.year
  }
}
console.log(alex.calcAge());
