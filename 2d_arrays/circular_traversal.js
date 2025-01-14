// Given a square matrix, you have to find the reverse U traversal of the matrix. Refer the sample I/O for better understanding. 

// [
//     [1,2,3]
//     [4,5,6]
//     [7,8,9]                         // output - 7 4 1 2 3 6 9 8 
// ]

let arr = [
        [1,2,3],
        [4,5,6],
        [7,8,9]                     
    ]
let bag = ""
for(let i =arr.length-1;i>=0;i--){
    bag+=arr[i][0] + " "
}

//for upper row
for(let i =1;i<arr.length;i++){
    bag+=arr[0][i] + " "
}

//for right side
for(let i = 1;i<arr.length;i++){
    bag+=arr[i][2] + " "
}

//for bottom
bag+=arr[2][1]
console.log(bag)