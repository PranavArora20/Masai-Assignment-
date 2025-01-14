// Given amatrixwith N rows and M columns. Print the matrix elements starting from the top right corner and follow a zig-zag pattern.

// Look at the image for better understanding

// [
//     [1,2,3,4,5],
//     [6,7,8,9,1],
//     [3,2,4,5,6],
//     [7,8,9,1,2]
// ]

let arr = [
    [1,2,3,4,5],
    [6,7,8,9,1],
    [3,2,5,4,6],
    [7,8,9,1,2]
]
let output=""
for(let i =0;i<arr.length;i++){
    if(i%2==0){
        for(let j =arr[i].length-1;j>=0;j--){
            output+=arr[i][j] + " "
        }
    }else{
        for(let j =0;j<arr[i].length;j++){
            output+=arr[i][j] + " "
        }
    }
}
console.log(output)