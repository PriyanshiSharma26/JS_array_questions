 //Find the intersection of the arrays [1, 2, 3] and [3, 4, 5]. 

 let a1=[1,2,3]
 let a2=[3,4,2,5]
 let a3=[]
 let index=0

 for(let i=0;i<a1.length;i++)
 {
    for(let j=0;j<a2.length;j++)
    {
        if(a1[i]===a2[j])
        {
            a3[index]=a1[i]
            index++

        }
    }
 }
 console.log(a3)