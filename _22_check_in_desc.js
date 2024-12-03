//Check if the array [5, 4, 3, 2, 1] is sorted in descending order


let arr = [5,4,3,2,1];

let is_sorted = true; 
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
        is_sorted = false;
        break;
    }
}

if (is_sorted) {
    console.log("Array is sorted in descending order");
} else {
    console.log("Array is not sorted");
}
