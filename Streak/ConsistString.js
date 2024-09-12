export const countConsistentStrings = function (allowed, words) {
    if (allowed.length === 0) return 0;
    let characters = {}
    for (let i = 0; i < allowed.length; i++) {
        characters[allowed[i]] = 1;
    }
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        let ptr1 = 0;
        let ptr2 = words[i].length - 1;
        let val = words[i]

        while (ptr1 <= ptr2) {
            if (ptr1 === ptr2) {
                if (characters[val[ptr1]] !== 1) break;
                ptr1++;
                ptr2--;
            } else if (characters[val[ptr1]] === 1 && characters[val[ptr2]] === 1) {
                ptr1++;
                ptr2--;
            } else {
                break;
            }
        }
        if (ptr1 > ptr2) count++;
    }
    return count;
};