import { swap } from "./main.js";

// HEAP SORT
// https://en.wikipedia.org/wiki/Heapsort
// Worst case: O(n log n)
// Best case: O(n log n)
// Avg case: O(n log n)

export function heapSort(valuesArray){
    buildHeap(valuesArray, valuesArray.length);

    for (var i = valuesArray.length; i > 0; i--){
        swap(0, i);
        heapify(valuesArray, 0, i);
    }
    return valuesArray;
}
function buildHeap(valuesArray, n){
    for(var i = Math.floor(n/2); i >= 0; i--){
        heapify(valuesArray, i, n);
    }
}

function heapify(valuesArray, i, n){
    while(true){
        var left = 2*i;
        var right = 2*i+1;
        var max = i;

        if (left < n && valuesArray[left] > valuesArray[max]){
            max = left;
        }
        if (right < n && valuesArray[right] > valuesArray[max]){
            max = right;
        }
        if (i == max) {
            break;
        }
        swap(i, max);
        i = max;
    }
}