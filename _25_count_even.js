// Count the number of even numbers in the array [13, 14, 15, 16, 17, 18].

let arr=[13, 14, 15, 16, 17, 18]
let count=0
for(let i=0;i<arr.length;i++)
{
    if(arr[i]%2==0)
    {
        count++
    }
}
console.log("count of even no ",count)