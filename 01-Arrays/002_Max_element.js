// Day 1 - Arrays
// Problem: Find maximum element in an array
// Input: [2, 5, 1, 9, 3]
// Output: 9
// Time Complexity: 0(n)
// Space Complexity: 0(1)

function findMax(arr) {
    if (arr.length === 0) return null;  
    let max = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; 
        }
    }
    return max;
}

console.log(findMax([2, 5, 1, 9, 3]));