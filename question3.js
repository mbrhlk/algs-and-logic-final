/*
Write a function that takes in a string and converts it into kebab case
(ex. ('Dogs are cute') ---> Dogs-Are-Cute) notice how every word 
becomes capitalized, and connected by a hyphen.
if the string passed in is an empty string, return 'This is an empty string!'

for this question, make a comment for every piece of the code, explaining
what it does and why.
*/

const kebabCase = function (str) {
        if(str === '') {   //conditional about if the string is empty, returns the string telling this
          return 'This is an empty string!'
        }
      
        const newWords = [] 
        const words = str.split(' ') //Splitting the string 
      
        for(var i = 0; i < words.length; i++) { //Iniciating the for loop
          var newWord = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() //Setting a new variable separating what is Uppercase and what is not.
          newWords.push(newWord) // Using push to create the new array
        }
      
        return newWords.join('-') //Returns join to put everything together
      }


console.log((kebabCase('Coding Is Fun') === 'Coding-Is-Fun') ? "Test 1: Passing" : "Test 1: Failing");

console.log((kebabCase('this STrIng has Weird casing') === 'This-String-Has-Weird-Casing') ? "Test 2: Passing" : "Test 2: Failing");

console.log((kebabCase('') === 'This is an empty string!') ? "Test 3: Passing" : "Test 3: Failing");

