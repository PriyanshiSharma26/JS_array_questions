//29. Find the median of the array [1, 3, 5, 7, 9].


let arr = [1, 3, 5, 7, 9,10];


for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

let len = arr.length;
let median = 0;

if (len % 2 === 1) {

    median = arr[Math.floor(len / 2)];
} else {
    
    median = (arr[len / 2 - 1] + arr[len / 2]) / 2;
}

console.log(median);
