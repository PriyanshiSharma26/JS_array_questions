let arr = [1, 2, 3, 4, 2, 3, 2, 4, 5, 1, 1];
let newarr = []; 


for (let i = 0; i < arr.length; i++) {
    let count = 0;
    let a = arr[i];
    let b = false;

    
    for (let j = 0; j < newarr.length; j++) {
        if (newarr[j] === a) {
            b = true;
            break;
        }
    }

    
    if (b) {
        continue;
    }

    
    for (let k = 0; k < arr.length; k++) {
        if (arr[k] == a) {
            count++;
        }
    }

    
    newarr.push(a);

    
    console.log(a + " :" + count+" times");
}
