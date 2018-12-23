// INSERTION SORT
// https://en.wikipedia.org/wiki/Insertion_sort
// Worst case: O(n^2)
// Best case: O(n)
// Avg case: O(n^2)

var i = 1;
var j;
function insertionSort(valuesArray){
    while (i < valuesArray.length){
        j = i;
        while (j > 0 && valuesArray[j-1] > valuesArray[j]){
            var a = valuesArray[j];
            valuesArray[j] = valuesArray[j-1];
            valuesArray[j-1] = a;
            j = j-1;
        }
        i = i+1
    }
    return valuesArray;
}
