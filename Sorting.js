//Sorting Questions

//Brute Force Sort
function bruteForceSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]; //swapping
            }
        }
    }
}

//Bubble Sort

//As the name suggest, iterate through the array with checking the current element & the next,
//compare them and swap them so smaller one is ahead,
//after iteration is complete the most greater will be at end
//now repeat the iteration again but stop just before the last element which was sorted.

function bubbleSort(arr) {
    let n = arr.length;
    while (n--) {
        for (let i = 0; i < n; i++) {
            if (arr[i + 1] < arr[i]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; //swapping
            }
        }
    }
}

//Selection Sort
// As the name suggest, select the min element from the unsorted list and to the front
// Divide the array into two lists i.e sorted and unsorted lists,
// first find the min element in the array and swap it with the first element to create the sorted list in left,
// then repeat this selecting process from the unsorted list and replace it with just the next unsorted element afte the sorted list 

function SelectionSort(arr) {
    let n = arr.length;
    let lastSortedElementIndex = 0;
    while (lastSortedElementIndex < n) {
        let minElement = arr[lastSortedElementIndex];
        let minEleIndex = lastSortedElementIndex;
        for (let i = lastSortedElementIndex; i < n; i++) {
            if (arr[i] < minElement) {
                minElement = arr[i];
                minEleIndex = i;
            }
        }
        [arr[lastSortedElementIndex], arr[minEleIndex]] = [arr[minEleIndex], arr[lastSortedElementIndex]] //swapping
        lastSortedElementIndex++;
    }
}

//Insertion Sort
// As the name suggests, insert the element where it should belong in the array elements,
// leave the first element as a single element is already sorted, then think of the left side as sorted array,
// start comparig the element with the element ahead of it and insert it where it should be,
// the element will be auto shifted if each element is compared against the current element.

function InsertionSort(arr) {
    let n = arr.length;
    let lastSortedElementIndex = 1;
    while (lastSortedElementIndex < n) {
        let currElement = arr[lastSortedElementIndex];
        let currElementIndex = lastSortedElementIndex;
        while (currElementIndex > 0 && arr[currElementIndex - 1] > currElement) {
            arr[currElementIndex] = arr[currElementIndex - 1];
            currElementIndex--;
        }
        arr[currElementIndex] = currElement;
        lastSortedElementIndex++;
    }
}

function SortZeroOneTwo(arr) {
    let n = arr.length;
    let left = 0;
    let mid = 0;
    let right = arr.length - 1;
    while (mid <= right) {
        switch (arr[mid]) {
            case 0: {
                [arr[left], arr[mid]] = [arr[mid], arr[left]];
                left++;
                mid++;
                break;
            }
            case 2: {
                [arr[right], arr[mid]] = [arr[mid], arr[right]];
                right--;
                break;
            }
            case 1: {
                mid++;
                break;
            }

        }
    }
}



let arr = [10, 3, 57, 2, 8, 321, 12, 3, 24, 9, 0, 1, 12, 20, 10, 230];
let zeroOneTwoArr = [0, 2, 1, 0, 0, 2, 1, 1, 0, 2, 1, 1, 1, 1, 0, 2];

// bruteForceSort(arr);
// bubbleSort(arr);
// SelectionSort(arr);
// InsertionSort(arr);
SortZeroOneTwo(zeroOneTwoArr);
console.log(zeroOneTwoArr)