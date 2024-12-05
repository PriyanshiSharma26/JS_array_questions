
// 26. Count the number of odd numbers in the array [19, 20, 21, 22, 23, 24]. 

let arr=[19, 20, 21, 22, 23, 24,27]
let count=0
for(let i=0;i<arr.length;i++)
{
    if(arr[i]%2!=0)
    {
        count++
    }
}
console.log("count of even no ",count)