
// 23. Remove all even numbers from the array [1, 2, 3, 4, 5, 6]. 


let arr=[1,2,3,4,5,6]
let arr2=[]
let a=0
for(let i=0;i<arr.length;i++)
{
    if(arr[i]%2!=0)
    {
        arr2[a]=arr[i]
        a++
    }
}

console.log(arr2)