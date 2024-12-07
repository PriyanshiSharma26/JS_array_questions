//28. Find the second largest element in the array [6, 7, 8, 9, 10]. 


let arr=[6,7,8,9,19,9]
let arr2=[]
let ind=0
for(let i=0;i<arr.length;i++)
{
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[i]>arr[j])
        {
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
}

for(let i=0;i<arr.length;i++)
{
    if(arr[i]!==arr[i+1])
    
        {
            arr2[ind]=arr[i]
            ind++
        }

}
console.log(arr2[arr2.length-2])
 