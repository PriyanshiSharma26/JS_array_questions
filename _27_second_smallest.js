//  Find the second smallest element in the array [3, 1, 4, 1, 5, 9]. 

let arr=[3, 1, 4, 1, 5, 9]
let arr2=[]
let ind=0

for(let i=0;i<arr.length;i++)
{
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


for (let i = 0; i < arr.length; i++) {
    // Check if the current element is different from the next one
    if (arr[i] !== arr[i + 1]) {
        arr2[ind] = arr[i];
        ind++;
    }
}

console.log(arr2)

console.log("second smallest : ",arr2[1])
