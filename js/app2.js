
function negativeNumber(nums){
    return nums.filter(num => num >= 0);
}

let numbers = [5, -1, 2, -10, 0, 8];
let filterNumbers = negativeNumber(numbers);
console.log(filterNumbers);
