// QUICK SORT
// https://en.wikipedia.org/wiki/Quicksort
// Worst case: O(N^2)
// Best case: O(n log n)
// Avg case: O(n log n)

export function quickSort(valuesArray, low, high) {
    let pi;
    let len = valuesArray.length;
    if (len > 1) {
        
        pi = partition(valuesArray, low, high);
        
        if (low < pi - 1){
            quickSort(valuesArray, low, pi - 1);
        }
        if (pi < high) {
            quickSort(valuesArray, pi, high);
        }
    }
    return valuesArray;
}

function partition(valuesArray, low, high) {
    let pivot = valuesArray[Math.floor((low + high) / 2)];
    let i = low;
    let j = high;

    while(i <= j) {
        while (valuesArray[i] < pivot) {
            i++;
        }
        while (valuesArray[j] > pivot) {
            j--;
        }
        if (i <= j) {
            [valuesArray[i], valuesArray[j]] = [valuesArray[j], valuesArray[i]];
            i++;
            j--;
        }
    }
    return i;
}