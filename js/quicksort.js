import { swap } from "./main.js";

// QUICK SORT
// https://en.wikipedia.org/wiki/Quicksort
// Worst case: O(N^2)
// Best case: O(n log n)
// Avg case: O(n log n)

export function quickSort(valuesArray, low, high) {
    if (low < high) {
        pi = partition(valuesarray, low, high);
        quickSort(valuesArray, low, pi);
        quickSort(valuesArray, pi+1, high);
        console.log("test");
    }
    return valuesArray;
}

function partition(valuesArray, low, high) {
   pivot = valuesArray[low];
   leftwall = low;

    for (i = low; i<= high-1; i++) {
        if (valuesArray[i] < pivot) {
            swap(valuesArray[i], valuesArray[leftwall]);
            leftwall++;
        }
    }
    swap(pivot, valuesArray[leftwall]);
    return leftwall

}