import { swap } from "./main.js";

// BUBBLE SORT
// https://en.wikipedia.org/wiki/Bubble_sort
// Worst case: O(n^2)
// Best case: O(n)
// Avg case: O(n^2)

export function bubbleSort(valuesArray) {
    for (let i = 0; i < valuesArray.length; i++){
        for (let j = 0; j < valuesArray.length - 1; j++) {
            if (valuesArray[j] > valuesArray[j + 1]) {
                swap(j, j+1);
            }
        }
    }
    return valuesArray;
}

