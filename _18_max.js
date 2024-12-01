// find max element js


let arr=[22, 33, 44, 11, 55]
let max=arr[0]

for(let i=0;i<arr.length;i++)
{
    if(arr[i]>max)
    {
        max=arr[i]
    }

}
console.log("max element is :",max)