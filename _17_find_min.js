//Find the minimum value in the array [22, 33, 44, 11, 55]. 

let arr=[22, 33, 44, 11, 55]
let min=arr[0]

for(let i=0;i<arr.length;i++)
{
    if(arr[i]<min)
    {
        min=arr[i]
    }

}
console.log("min element is :",min)