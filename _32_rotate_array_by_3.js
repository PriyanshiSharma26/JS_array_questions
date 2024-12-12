//  Rotate the array [1, 2, 3, 4, 5] to the right by 3 positions. 


let arr = [1, 2, 3, 4, 5];
let newarr = [];
let j = 0;

// Start from index 2 (which is the element 3) and move to the end of the array
for (let i = 2; i < arr.length; i++) {
    newarr[j] = arr[i];
    j++;
}

// Then, add the first 2 elements (indices 0 and 1) to the end of newarr
for (let i = 0; i < 2; i++) {
    newarr[j] = arr[i];
    j++;
}

console.log(newarr);
