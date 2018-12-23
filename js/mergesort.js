// MERGE SORT
// https://en.wikipedia.org/wiki/Merge_sort
// Worst case: O(n log n)
// Best case: O(n log n)
// Avg case: O(n log n)

function merge(x, y) {
    let result = [];
    while (x.length != 0 && y.length != 0){
        if (x[0] <= y[0]){
            result.push(x[0]);
            x.shift();
        }
        else {
            result.push(y[0]);
            y.shift();
        }
    }
    while (x.length != 0) {
        result.push(x[0]);
        x.shift();
    }
    while (y.length != 0) {
        result.push(y[0]);
        y.shift();
    }
    return result;
}

function mergeSort(valuesArray) {
    if (valuesArray.length <= 1) {
        return valuesArray;
    }
    let x = [];
    let y = [];
    for (i = 0; i < valuesArray.length; i++){
        if (i < valuesArray.length/2) {
            x.push(valuesArray[i]);
        }
        else {
            y.push(valuesArray[i]);
        }
    }
    x = mergeSort(x);
    y = mergeSort(y);

    return merge(x,y);
}