import { swap } from "./main.js";

// HEAP SORT
// https://en.wikipedia.org/wiki/Heapsort
// Worst case: O(n log n)
// Best case: O(n log n)
// Avg case: O(n log n)

export function heapSort(valuesArray){
    buildHeap(valuesArray, valuesArray.length);

    for (var i = valuesArray.length-1; i > 0; i--){
        swap(0, i);
        heapify(valuesArray, 0, i-1)
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



// function heapSort(valuesArray) {
//     heapify(valuesArray);
//     let end = valuesArray.length - 1;
//     while (end > 0) {
//         let a = valuesArray[end];
//         valuesArray[end] = valuesArray[0];
//         valuesArray[0] = a;
//         end = end-1;
//         siftDown(valuesArray, 0, end);
//     }
//     return valuesArray
// }

// function heapify(valuesArray) {
//     let start = Math.floor((valuesArray.length-1)/2);

//     while (start >= 0) {
//         siftDown(valuesArray, start, valuesArray.length-1);
//         start = start-1;
//     }

// }

// function siftDown(valuesArray, start, end) {
//     let root = start;
//     while (2*root+1 <= end) {
//         var child = 2*root+1;
//         var swap = root;
//         if (valuesArray[swap] < valuesArray[child]){
//             swap = child;
//         }
//         if (child+1 <= end && valuesArray[swap] < valuesArray[child+1]){
//             swap = child+1;
//         }
//         if (swap == root) {
//             return;
//         }
//         else {
//             var a = valuesArray[root];
//             valuesArray[root] = valuesArray[swap];
//             valuesArray[swap] = a;
//         }
//     }
// }