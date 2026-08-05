// function isAnagram(text1: string, text2: string): boolean | undefined {
//     if (text1.length !== text2.length) return false;

//     const text1Sorted = text1.split('').toSorted().join('');
//     const text2Sorted = text2.split('').toSorted().join('');

//     return text1Sorted === text2Sorted;
// }


// console.log(isAnagram("anagram", "nagaram")); // true
// console.log(isAnagram("rat", "car")); // false



// function isAnagram(text1: string, text2: string): boolean | undefined {
//     if (text1.length !== text2.length) return false;

//     const result = new Map();

//     for (const char of text1) {
//         const charCount = result.get(char) || 0;
//         result.set(char, charCount + 1);
//     }

//     for (const char of text2) {
//         const charCount = result.get(char);
//         if (!charCount) return false;
//         result.set(char, charCount - 1);
//     }

//     return true;
// }


// console.log(isAnagram("anagram", "nagaram")); // true
// console.log(isAnagram("rat", "car")); // false
