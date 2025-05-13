function firstNonRepeatedChar(str) {
    const charCount = {}; // Object to store character frequency

    // Count occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first character that appears only once
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // Return null if no unique character is found
}
