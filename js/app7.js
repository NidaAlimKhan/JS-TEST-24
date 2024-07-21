// TASK //

function string(originalString) {
    if (originalString.length >= 3) {
        let lastThreeChar = originalString.slice(-3);
        let updatedString = lastThreeChar.repeat(4);
        return updatedString;
    } else {
        return '';
    }
}

// DOING THE FUNCTION //

let originalString = " HelloWorld";
let updatedString = string(originalString);
console.log(updatedString);

// ------------ //