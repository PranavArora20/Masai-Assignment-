// Task Rescheduling System: Managing Priorities Dynamically
// You are developing a task management system that tracks pending tasks for the day. Create an array with five tasks. 
// Implement the following operations without using specific method references:
// Remove the first task from the list.
// Add two new high-priority tasks to the beginning of the list.
// Replace the last task in the list with a new task.
// Log the updated task list after all operations.

let arr = ["task1","task2","task3","task4","task5"]

let arr1=[]
let arr2=[]

arr2[0]="P1"
arr2[1] = "P2"


for(let i =1;i<arr.length;i++){
        arr1[i-1] = arr[i]        
        arr2[i+1]=arr1[i-1]
}
// arr1[0] = "task6"
arr2[arr2.length-1] = "New Task"
// console.log(arr1)

console.log(arr2)

