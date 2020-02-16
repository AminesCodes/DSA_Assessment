// Q2. 
// Write a function that takes in an array of integers (arr) and a number (n)
// You function should return an array with only numbers appearing n or more times. 
// Your solution must work in O(n) time.
//
// Example:
// Input: [1,3,4,1,9,1,3,4,3,1,2], 3
// Output: [1,3]

const occurrenceFilter = (arr, n) => {
    const arrMap = {}
    const outputArr = []

    for (let num of arr) {
        if (arrMap[num]) {
            arrMap[num] += 1 
        } else {
            arrMap[num] = 1
        }
    }

    for (let num in arrMap) {
        if (arrMap[num] >= n) {
            outputArr.push(parseInt(num))
        }
    }

    return outputArr
}

console.log(occurrenceFilter([1, 3, 4, 1, 9, 1, 3, 4, 3, 1, 2], 3)) // Returns [1, 3]
