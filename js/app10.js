// TASK //

function index1(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
    return -1;
}

// EXAMPLE OF FINDING AN INDEX OF ARRAY //

const myArray = [10, 20, 30, 40, 50];
const itemFind = 30;
const index2 = index1(myArray, itemFind);
if (index2 !== -1) {
    console.log("The index of", itemFind, "in the array is:", index);
} else {
    console.log(itemFind, "is not found in the array.");
}

// ----- //