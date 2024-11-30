// sort the array [5, 3, 8, 1, 2] in ascending order


let arr = [5, 7, 2, 9, 8, 1];


for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) 
        {
        if (arr[i] > arr[j]) 
            { 
        
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log(arr);

