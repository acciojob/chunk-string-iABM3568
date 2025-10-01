function stringChop(str, size) {
  // your code here

	// Handle null input
    if (str === null || str === undefined) return [];

    // Convert size to number in case it's a string from prompt
    size = Number(size);
    if (size <= 0) return []; // invalid chunk size

    const result = [];
    for (let i = 0; i < str.length; i += size) {
        result.push(str.slice(i, i + size));
		
		
    }
    return result;   

}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
