//8. Add an element to the beginning of the array [8, 9, 10]. 

let arr=[8,9,10]
let firstelement=7

for(let i=arr.length-1;i>=0;i--)
{
    arr[i+1]=arr[i]
}
arr[0]=firstelement
console.log(arr)
