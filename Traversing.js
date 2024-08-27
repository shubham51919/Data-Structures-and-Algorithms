function SumAllElements(arr) {
    return arr.reduce((acc, ele) => acc = acc + ele, 0);
}

function MinAndMax(arr) {
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    min = Math.min(...arr);
    min = arr.reduce((acc, ele) => acc = Math.min(acc, ele), arr[0]);
    max = Math.max(...arr);
    max = arr.reduce((acc, ele) => acc = Math.max(acc, ele), arr[0]);
    return [min, max]
}



let arr = [2, 6, 9, 6, 10, 34, 5]
console.log(SumAllElements(arr))
console.log(MinAndMax(arr))