'use strict';

function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    const output = `${firstName} ${sirName} is ${age} years old, born in ${birthYear} born in ${birthDistrict}, southern ${birthCountry}`;
      console.log(output);
      
      if (birthYear >= 1981 && birthYear <= 1996) {
          var millennial = true
          const str = `Ohh!, you are a millennial, ${firstName} ${sirName}`
          console.log(str);
      } 
      console.log(millennial);
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
