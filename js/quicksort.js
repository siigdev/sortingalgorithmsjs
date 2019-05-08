// QUICK SORT
// https://en.wikipedia.org/wiki/Quicksort
// Worst case: O(N^2)
// Best case: O(n log n)
// Avg case: O(n log n)

export function quickSort(valuesArray, low = 0, high = valuesArray.length-1) {
    let pi;
    if (valuesArray.length > 1) {
        
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

    while(low <= high) {
        while (valuesArray[low] < pivot) {
            low++;
        }
        while (valuesArray[high] > pivot) {
            high--;
        }
        if (low <= high) {
            [valuesArray[low], valuesArray[high]] = [valuesArray[high], valuesArray[low]];
            low++;
            high--;
        }
    }
    return low;
}