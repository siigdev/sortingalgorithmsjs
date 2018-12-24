// HEAP SORT
// https://en.wikipedia.org/wiki/Heapsort
// Worst case: O(n log n)
// Best case: O(n log n)
// Avg case: O(n log n)

function heapSort(valuesArray) {
    heapify(valuesArray);
    let end = valuesArray.length - 1;
    while (end > 0) {
        let a = valuesArray[end];
        valuesArray[end] = valuesArray[0];
        valuesArray[0] = a;
        end = end -1;
        siftDown(valuesArray, 0, end);
    }
    return valuesArray
}

function heapify(valuesArray) {
    let start = Math.floor((valuesArray.length-1));

    while (start >= 0) {
        siftDown(valuesArray, start, valuesArray.length-1);
        start = start-1;
    }

}

function siftDown(valuesArray, start, end) {
    let root = start;
    while (2*root+1 <= end) {
        let child = 2*root+1;
        let swap = root;
        if (valuesArray[swap] < valuesArray[child]){
            swap = child;
        }
        if (child+1 <= end && valuesArray[swap] < valuesArray[child+1]){
            swap = child+1;
        }
        if (swap == root) {
            return;
        }
        else {
            var a = valuesArray[root];
            valuesArray[root] = valuesArray[swap];
            valuesArray[swap] = a;
        }
    }
}