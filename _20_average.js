//  Calculate the average of all elements in the array [1, 2, 3, 4, 5]. 


let arr=[1, 2, 3, 4, 5]
    let sum=0
    let avg=0

for(let i=0;i<arr.length;i++)
{
    sum=sum+arr[i]
}
console.log("sum of all element is :",sum)

avg=sum/arr.length

console.log("average is : ",avg)


