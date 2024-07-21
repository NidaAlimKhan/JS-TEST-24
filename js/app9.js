// TASK //

function smallestNumber(value) {
    let numString = value.toString();
    let lastIndex = numString.length - 1;
    let numZero = 0;
    while (lastIndex >= 0 && numString[lastIndex] === '0') {
        numZero++;
        lastIndex--;
    }
    if (numZero === numString.length) {
        return value;
    } else {
        let roundNumber = Math.ceil(value / Math.pow(10, numZero)) * Math.pow(10, numZero);
        return roundNumber;
    }
}

// DOING THE FUNCTION //

console.log(smallestNumber(592)); 
console.log(smallestNumber(590)); 
console.log(smallestNumber(600));
console.log(smallestNumber(605)); 
console.log(smallestNumber(1000)); 
console.log(smallestNumber(123456)); 

// ------- //
