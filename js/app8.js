// TASK //

function angles(angle) {
    if (angle > 0 && angle < 90) {
        return "Acute Angle";
    } else if (angle === 90) {
        return "Right Angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse Angle";
    } else if (angle === 180) {
        return "Straight Angle";
    } else {
        return "Angle Invalid. Please enter a valid Angle between 0 and 180 degrees.";
    }
}

// DOING THE FUNCTION //

console.log(angles(45));  
console.log(angles(90));  
console.log(angles(120)); 
console.log(angles(180)); 
console.log(angles(200));  

// ------ //