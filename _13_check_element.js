//Check if the element 25 is present in the array [5, 10, 15, 20]. 

let arr=[5, 10, 15, 20]
let check_element=false
for(let i=0;i<arr.length;i++)
{
    

    if( arr[i]===25)
    {
      check_element=true
      break
    }

}

if(check_element)
{
    console.log("25 is present in an array")
}
else
{
    console.log("25 is not present in an array")
}