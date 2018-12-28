// QUICK SORT
// https://en.wikipedia.org/wiki/Quicksort
// Worst case: O(N^2)
// Best case: O(n log n)
// Avg case: O(n log n)

export function quickSort(valuesArray, low, high) {
    var pivot;
    var partitionvalue;
    if (low < high){
        pivot = high;
        partitionvalue = partition(valuesArray, pivot, low, high);
        quickSort(valuesArray, low, partitionvalue-1);
        quickSort(valuesArray, partitionvalue+1, high);
    }
    return valuesArray;
}

function partition(valuesArray, pivot, low, high){
    var pivotvalue = valuesArray[pivot];
    var partitionvalue = low;

    for (var i = low; i < high; i++){
        if(valuesArray[i] < pivotvalue) {
            let a = valuesArray[i];
            valuesArray[i] = valuesArray[partitionvalue];
            valuesArray[partitionvalue] = a;
            partitionvalue++;
        }
    }
    let b = high;
    high = valuesArray[partitionvalue];
    valuesArray[partitionvalue] = b;
    
    return partitionvalue;
}