//Find the mode of the array [2, 3, 2, 5, 2, 6, 2]. 


let arr=[2, 3, 2, 5, 2, 6, 2]
let arr2=[]
let ind=0
let maxcount=0
let mode=0

for(let i=0;i<arr.length;i++)
{
    let count=0
    let find_element=false

    for(let j=0;j<arr2.length;j++)
    {
        if(arr[i]===arr[j])
            find_element=true
        break
    }
    

if(find_element)
{
    continue;
}

for(let k=0;k<arr.length;k++)
{
    if(arr[k]===arr[i])
    {
        count++
    }
}

arr2[ind]=arr[i]
ind++

if(count>maxcount)
{
    maxcount=count
    mode=arr[i]
}



console.log("count of - ",arr[i]," is :",count)
    


}
console.log("mode is",mode)