// Function to sum all elements in an array
function sumAllElements(arr) {
    // Using reduce to sum up all elements in the array
    return arr.reduce((acc, ele) => acc + ele, 0);
}

// Function to find the minimum and maximum elements in an array
function minAndMax(arr) {
    // Using spread syntax to find min and max values
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    // Alternatively using reduce for the same task (can be removed for brevity)
    // const min = arr.reduce((acc, ele) => Math.min(acc, ele), arr[0]);
    // const max = arr.reduce((acc, ele) => Math.max(acc, ele), arr[0]);

    return [min, max];
}

// Function to reverse an array in place
function reverse(arr) {
    let start = 0;
    let end = arr.length - 1;

    // Swap elements from the start and end moving towards the center
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]; // Using array destructuring to swap
        start++;
        end--;
    }
}

// Function to calculate the average of all elements in an array
function average(arr) {
    // Calculate the sum and divide by the length of the array
    const sum = arr.reduce((acc, ele) => acc + ele, 0);
    return sum / arr.length;
}

// Function to count occurrences of an element in an array
function occurrences(arr, ele) {
    // Using reduce to count how many times 'ele' appears in 'arr'
    return arr.reduce((count, item) => item === ele ? count + 1 : count, 0);
}

// Example usage
let arr = [2, 6, 9, 2, 6, 10, 34, 5];
console.log(sumAllElements(arr));      // Output: 74
console.log(minAndMax(arr));           // Output: [2, 34]
reverse(arr);
console.log(arr);                      // Output: [5, 34, 10, 6, 2, 9, 6, 2]
console.log(average(arr));             // Output: 9.25
console.log(occurrences(arr, 2));      // Output: 2
