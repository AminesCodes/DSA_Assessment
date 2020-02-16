// Q6.
// Implement a function that accepts an array of integers as an argument. 
// This function should return the sum of each integer in the array. 
// Your solution should be **recursive**. Your function must be pure (cannot use global variables)


const recursiveSum = (arr) => {
    if (arr.length) {
        const arrCopy = [...arr]
        return arrCopy.pop() + recursiveSum(arrCopy)
    }
    return 0
}

const arr1 = [5, 2, 9, 11]
console.log(recursiveSum(arr1)) // should return 27
