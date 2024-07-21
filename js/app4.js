// TASK //

function palindrome(string) {
    string = string.toLowerCase();
    string = string.replace(/[\W_]/g, '');
    let reversedstring = string.split('').reverse().join('');
    return string === reversedstring;
}

// DOING THE FUNCTION //

console.log(palindrome("Mercedes"));
console.log(palindrome("HelloWorld"));
console.log(palindrome("Did you saw something?"));
console.log(palindrome("Did you have my car key?"));
console.log(palindrome("That is my favourite car!"));

// --------- //