let arr=[1,2,3,4,5,6,1,2,3,4,4,8]
console.log("duplicate elements are :")
let arr2=[]

for(let i=0;i<arr.length;i++)
{
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[i]==arr[j] && !arr2.includes(arr[i]))
        {
            arr2.push(arr[i])
        }

    }

}
console.log(arr2)







// function findDuplicates(arr) {
//     let duplicates = [];

//     // Loop through the array
//     for (let i = 0; i < arr.length; i++) {
//         let isDuplicate = false;

//         // Check if the current element has been checked before
//         for (let j = 0; j < i; j++) {
//             if (arr[i] === arr[j]) {
//                 isDuplicate = true;
//                 break;
//             }
//         }

//         // If it's a duplicate and not already in the duplicates array, add it
//         if (isDuplicate) {
//             let alreadyAdded = false;j

//             // Manually check if the duplicate is already in the duplicates array
//             for (let k = 0; k < duplicates.length; k++) {
//                 if (arr[i] === duplicates[k]) {
//                     alreadyAdded = true;
//                     break;
//                 }
//             }

//             if (!alreadyAdded) {
//                 duplicates.push(arr[i]);
//             }
//         }
//     }

//     return duplicates;
// }

// let arr = [4, 4, 4, 4, 5, 6, 2, 2];
// console.log(findDuplicates(arr));  // Output: [4, 2]
