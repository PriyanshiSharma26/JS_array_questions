for(let i=1;i<arr.length;i++)
    {
        if(arr[i]>max)
        {
            max=arr[i]
        }
        else if(arr[i]<min)
        {
            min=arr[i]
        }
    
    }
    console.log("min element  is : ",min)
    console.log("max element is : "+max)