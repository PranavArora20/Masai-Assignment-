// Problem Statement: You are given a 2D array, whose dimensions are stored in two variables with the name N and M

// The value stored in N denotes the number of rows, and the value in M denotes the number of columns

// The 2D array is stored in a variable with the name arr

// You have to print the elements of the 2D array, row by row

// For example, consider the value stored in N = 3,M = 2, and the array is arr = [1,2],[3,4],[5,6], then the required output will be

// 1 2

// 3 4

// 5 6


let n = 3
let m = 2

let arr =[
    [1,2],
    [3,4],
    [5,6]
]
for(let i =0;i<n;i++){
    let output = ""
    for(let j =0;j<m;j++){
        // console.log(arr[i][j])
        output+= arr[i][j] + " "
    }
    console.log(output)
}
