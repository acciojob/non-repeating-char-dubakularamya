function firstNonRepeatedChar(str) {
 let str = "aabbcdd";
 let res = null;
for (let char of str) {
    if (
        str.indexOf(char)
        ===
        str.lastIndexOf(char)
    ) {
        res = char;
        break;
    }
}
console.log("Input: " + str);
console.log("Non-repeating character: " + res);
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
