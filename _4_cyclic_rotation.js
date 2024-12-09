//  cyclic rotation
// input: [1,2,3,5,8]
//  output: [2,3,5,8,1]

let arr=[1,2,3,5,8]
let j=0
for(let i=1;i<arr.length;i++)
{
   
    let temp=arr[i]
     arr[i]=arr[j]
     arr[j]=temp
     j++
   }


console.log(arr)