// Problem Statement: You are given a 2D array, whose dimensions are stored in two variables with the name Nand M

// The value stored in N denotes the number of rows, and the value in M denotes the number of columns

// The 2D array is stored in a variable with the name arr

// You have to print the sum of indexes of the 2D array for all positions in the 2D array

// For example, consider the value stored in N = 3,M = 2, and the array is arr = [1,2],[3,4],[5,6], then the required output will be

// At index (0,0), the sum of indexes becomes (0 + 0 = 0)

// At index (0,1), the sum of indexes becomes (0 + 1 = 1)

// At index (1,0), the sum of indexes becomes (1 + 0 = 1)

// At index (1,1), the sum of indexes becomes (1 + 1 = 2)

// At index (2,0), the sum of indexes becomes (2 + 0 = 2)

// At index (2,1), the sum of indexes becomes (2 + 1 = 3)

// Therefore, the output becomes

// 0 1

// 1 2

// 2 3

let n = 3
let m = 2
let arr = [
    [1,2],
    [3,4],
    [5,6]
] 
for(let i =0;i<n;i++){
    let sum =0
    let output = ""
    for(let j =0;j<m;j++){
        sum = i + j
        output+=sum + " "
    }
    console.log(output)
}