// TASK //

function vowels1(string) {
    const vowels2 = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let vowels3 = 0;
    for (let char of string) {
        if (vowels2.has(char)) {
            vowels3++;
        }
    }
    return vowels3;
}

// DOING THE FUNCTIONS //

let string = "Hello World";
console.log(vowels1(string)); 

// -------- //
