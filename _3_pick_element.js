//  pick element
let arr=[5,10,15,20,15,30,10]
let len=arr.length
if(arr[0]>arr[1])
{
    console.log(arr[0])
}
if(arr[len-1]>arr[len-2])
{
    console.log(arr[len-1])
}

for(let i=1;1<len;i++)
{
    if(arr[i]>arr[i-1] && arr[i]>arr[i+1])
    {
        console.log(arr[i])
    }
    
}
















