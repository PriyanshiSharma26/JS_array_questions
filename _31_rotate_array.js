// Rotate the array [1, 2, 3, 4, 5] to the left by 2 positions.


let arr=[1, 2, 3, 4, 5]
let arr2=[]
let i=0;

let temp=arr[0]
for(let j=1;j<arr.length;j++)
{
    arr2[i]=arr[j]
    i++

}
arr2[arr2.length]=temp


console.log(arr2)
