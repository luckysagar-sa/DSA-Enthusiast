// Day 1 - Arrays
// Problem: Sum of all elements in an array
// Input: [1,2,3,4]
// Output: 10
// Time Complexity: O(n)
// Space Complexity: O(1)

function sumOfArray(arr) {
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

return sum;
}

console.log(sumOfArray([1, 2, 3, 4]));  



