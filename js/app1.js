// TASK //

function reverseArray(array) {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        [array[left], array[right]] = [array[right], array[left]];
        left++;
        right--;
    }
    return array;
}

// ARRAY WITH 5 NUMBERS //

let arraySmall = [1, 2, 3, 4, 5];
console.log("Original Array: ", arraySmall);
console.log("Reversed Array: ", reverseArray(arraySmall.slice()));

// LARGE ARRAY //

let arrayLarge = [7, 12, 4, 89, 33, 61, 17, 42];
console.log("\nOriginal Array: ", arrayLarge);
console.log("Reversed Array: ", reverseArray(arrayLarge.slice()));

// ------- //
