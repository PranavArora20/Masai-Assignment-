// Nobita and Frequency 2

// Description

// Nobita is given a number N (length of the string) and a string, and 
// he needs to answer the character which is present in the string and has the lowest frequency, i.e. 
// suppose you have a string "abbca", in this string the frequency of characters are as follow:

// Frequency of a character is the number of time they occur in a string.

// a = 2
// b = 2
// c = 1

// If there are multiple characters with lowest frequency then output the character which occurs first in alphabetical order, 
// example: "abcb", in this string 'a' and 'c' both occurs only 1 time, output will be 'a' as 'a' comes before 'c' in alphabetical order.

// Note: All characters of the input string are lowercase English alphabet

function nobitaFrequency(n,str){
    //write code here
    
    let obj={}
    
    for(let i =0;i<n;i++){
      if(obj[str[i]]){      //falsy value ho skti hai
        obj[str[i]]++
      }else{
        obj[str[i]]=1
      }
    }
    // console.log(obj)
    
    let min=Infinity
    let char = ''
    for(let i in obj){
      if(obj[i]<min){
        min=obj[i]
        char = i
      }
      else if(obj[i]=== min && i.localeCompare(char)<0){
        char = i
      }
    }
    console.log(char)
    
  }