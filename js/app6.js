// TASK //

function mappedValue(array, mapFunc) {
    const mappedValues = array.map(mapFunc);
    const minValue = Math.min(...mappedValues);
    return minValue;
}

// DOING THE FUNCTION //

const numbers = [1, 2, 3, 4, 5];
const squareMapper = (num) => num * num;
const squaredValue = mappedValue(numbers, squareMapper);
console.log("Minimum squared value: ", squaredValue);

// ------- //
