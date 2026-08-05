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
// // console.log(isAnagram("anagram", "nagaram")); // true
// // console.log(isAnagram("rat", "car")); // false
// function twoSumTwoPointers(array, target) {
//     var leftPointer = 0;
//     var rightPointer = array.length - 1;
//     while (array[leftPointer] < array[rightPointer]) {
//         if (array[leftPointer] + array[rightPointer] !== target)
//             return [];
//         leftPointer++;
//         rightPointer--;
//         return [array[leftPointer], array[rightPointer]];
//     }
// }
// console.log(twoSumTwoPointers([3, 4, 5, 6], 7)); // [3, 4]
// 1. опеределяем укзательями наало и конец массива
// 2. циклом while (пока не пройдем веь массив) идем по каждому индексу массива и складывем указатели и сравниваем с таргетом
// 3. ели не подходит возвращаем false и двигаем указатели навстерчу двруг другу пока не найдем пожзодящие числа сумма которых юудет равно тарггету. Когда находим клаем индексы эти числа в массив
