function stringChop(str, size) {
  // your code here

	// Step 1: Check if the string is null or empty
  if (str === null || str === '') {
    return [];
  }
  
  // Step 2: Convert size to a number (prompt returns string)
  let chunkSize = 0;
  for (let i = 0; i < size.length; i++) {
    chunkSize = chunkSize * 10 + (size[i] - '0');
  }
  
  // Step 3: Create an empty array to store chunks
  let result = [];
  
  // Step 4: Create a variable to track current position in string
  let currentPosition = 0;
  
  // Step 5: Loop through the string and create chunks
  while (currentPosition < str.length) {
    
    // Step 6: Create an empty string for current chunk
    let chunk = '';
    
    // Step 7: Add characters to chunk until we reach chunk size or end of string
    let count = 0;
    while (count < chunkSize && currentPosition < str.length) {
      chunk = chunk + str[currentPosition];
      currentPosition = currentPosition + 1;
      count = count + 1;
    }
    
    // Step 8: Add the chunk to result array
    result[result.length] = chunk; 
  } 
  
  // Step 9: Return the array of chunks
  return result;

}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
