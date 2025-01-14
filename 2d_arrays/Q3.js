// Title:**L1-Pattern Printing III

// **Problem Statement:**You are given a number stored in a variable with the name N You have to print the pattern 
// as shown below according to the value stored in N For example, 
// consider the value stored in N = 5, then the required pattern will be.
// * * * * *

// *

// *

// *

// * * * * *


let n = 5
for(let i =0;i<n;i++){
    let row =""
    if(i ==0 || i == n-1){
        for(let j =0;j<n;j++){
            row+="*"
        }
    }else{
        row+='*'
    }
    console.log(row)
}