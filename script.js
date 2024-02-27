function stringChop(str, size) { 
	 if (!str) {
        return [];
    }

    const result = [];
    let startIndex = 0;

    // Iterate over the string in chunks of size 'size'
    while (startIndex < str.length) {
        // Extract a chunk of the string with length equal to 'size'
        const chunk = str.slice(startIndex, startIndex + size);
        result.push(chunk);

        // Move the start index to the next chunk
        startIndex += size;
    }

    return result;
   
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
