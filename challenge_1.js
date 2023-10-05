
// Given a string S , return the "reversed"  string where all characters that are not a letter stay in the same place , and all letters reverse their positions

// Example 1:
// input : ab-cd
// output: dc-ba

// input: a-bC-dEf=ghIj!!
// output: j-Ih-gfE=dCba!! 
// solution 1
function reverseLetters(str) {
    // Convert the string into an array of characters
    const characters = str.split('');
  
    // Initialize pointers for the start and end of the string
    let start = 0;
    let end = str.length - 1;
  
    while (start < end) {
      // Find the first letter from the start of the string
      while (start < end && !isLetter(characters[start])) {
        start++;
      }
  
      // Find the first letter from the end of the string
      while (start < end && !isLetter(characters[end])) {
        end--;
      }
  
      // Swap the letters
      if (start < end) {
        const temp = characters[start];
        characters[start] = characters[end];
        characters[end] = temp;
      }
  
      // Move the pointers
      start++;
      end--;
    }
  
    // Join the characters back into a string
    const reversedString = characters.join('');
    return reversedString;
  }
  
  // Helper function to check if a character is a letter
  function isLetter(char) {
    return /[a-zA-Z]/.test(char);
  }
  
  // Example usage:
  const inputString = 'a-bC-dEf=ghIj!!';
  const reversedString = reverseLetters(inputString);
  console.log(reversedString); // Outputs: 'j-Ih-gfE-dCba!!'
  
  
  
  // solution 2
  function reverseOnlyLetters(str){
  let letters = str.match(/[a-zA-Z]/g)
  
  if(!letters) return str;
  
  let reversed = str.split('').map(char=>{
      if(/[a-zA-Z]/.test(char)){
          return letters.pop();
      }
      return char;
  })
  
  return reversed;
  }