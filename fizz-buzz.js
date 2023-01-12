// The program prints 1 to 100.
// Each number that is evenly divisible by 3, instead of writing the number, write fizz.
// If the number is evenly divisible by 5, instead of writing the number, write buzz.
// If the number is evenly divisible by both 3 and 5, instead of writing the number or fizz or buzz, write fizzbuzz.
// To help us out with readability, write out each number or word on its own line.

// An additional perk to this exercise is it allows interviewing engineers to ask you why you wrote the code the way you did. Be prepared to offer explanations.

function fizzBuzz() { 
  const array = [];

  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        array.push('fizzbuzz')
      } else if (i % 3 === 0) {
        array.push('fizz')
      } else if (i % 5 === 0) {
        array.push('buzz')
      } else {
        array.push(i)
      }
    }
console.log(array.join('\r\n'));
  }
fizzBuzz();