// // function isAnagram(text1: string, text2: string): boolean | undefined {
// //     if (text1.length !== text2.length) return false;

// //     const text1Sorted = text1.split('').toSorted().join('');
// //     const text2Sorted = text2.split('').toSorted().join('');

// //     return text1Sorted === text2Sorted;
// // }


// // console.log(isAnagram("anagram", "nagaram")); // true
// // console.log(isAnagram("rat", "car")); // false



// // function isAnagram(text1: string, text2: string): boolean | undefined {
// //     if (text1.length !== text2.length) return false;

// //     const result = new Map();

// //     for (const char of text1) {
// //         const charCount = result.get(char) || 0;
// //         result.set(char, charCount + 1);
// //     }

// //     for (const char of text2) {
// //         const charCount = result.get(char);
// //         if (!charCount) return false;
// //         result.set(char, charCount - 1);
// //     }

// //     return true;
// // }


// // console.log(isAnagram("anagram", "nagaram")); // true
// // console.log(isAnagram("rat", "car")); // false


// function twoSumTwoPointers(array: number[], target: number): number[] | undefined {
//     let leftPointer = 0;
//     let rightPointer = array.length - 1;
//     const arraySorted = array.toSorted((a, b) => a - b);

//     while (leftPointer < rightPointer) {
//         if (arraySorted[leftPointer] + arraySorted[rightPointer] === target) {
//             return [arraySorted[leftPointer], arraySorted[rightPointer]]
//         } else if (arraySorted[leftPointer] + arraySorted[rightPointer] < target) {
//             leftPointer++;
//         } else {
//             rightPointer--;
//         }

//     }
//     return []

// }

// console.log(twoSumTwoPointers([4, 5, 3, 6], 7)); // [3, 4]







// function twoSumHash(array: number[], target: number): number[] | undefined {
//     const resultMap = new Map();

//     for (const number of array) {
//         const complement = target - number;

//         if (resultMap.has(complement)) {
//             return [resultMap.get(complement), number]
//         }

//         resultMap.set(number, number);
//     }

//     return [];
// }

// console.log(twoSumHash([4, 5, 3, 6], 7)); // [3, 4]