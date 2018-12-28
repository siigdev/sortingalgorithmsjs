import { swap } from "./main.js";

// INSERTION SORT
// https://en.wikipedia.org/wiki/Insertion_sort
// Worst case: O(n^2)
// Best case: O(n)
// Avg case: O(n^2)

export function insertionSort(valuesArray){
    let i = 1;
    let j;
    while (i < valuesArray.length){
        j = i;
        while (j > 0 && valuesArray[j-1] > valuesArray[j]){
            swap(j, j-1);
            j = j-1;
        }
        i = i+1
    }
    return valuesArray;
}

