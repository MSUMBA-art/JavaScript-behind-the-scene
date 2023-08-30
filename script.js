'use strict';

function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    let output = `${firstName} ${sirName} is ${age} years old, born in ${birthYear} born in ${birthDistrict}, southern ${birthCountry}`;
      console.log(output);
      
      if (birthYear >= 1981 && birthYear <= 1996) {
        var millennial = true
        const firstName = "Lloyd"
        console.log(add(10, 7));
          const str = `Ohh!, you are a millennial, ${firstName} ${sirName}`
        console.log(str);
        
        function add(a, b) {
          return a + b
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
