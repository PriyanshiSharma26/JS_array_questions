
//21. Check if the array [1, 2, 3, 4, 5] is sorted in ascending order. 

let arr = [1, 2,8, 3, 4, 5];

let is_sorted = true; 
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
        is_sorted = false;
        break;
    }
}

if (is_sorted) {
    console.log("Array is sorted in ascending order");
} else {
    console.log("Array is not sorted");
}
