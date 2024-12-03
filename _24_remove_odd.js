// Remove all odd numbers from the array [7, 8, 9, 10, 11, 12]. 

let arr=[7, 8, 9, 10, 11, 12]
let arr2=[]
let ind=0

for(let i=0;i<arr.length;i++)
{
    if(arr[i]%2==0)
    {
        arr2[ind]=arr[i]
        ind++
    }

}
console.log(arr2)