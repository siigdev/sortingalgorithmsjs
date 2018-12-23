// BUBBLE SORT
// https://en.wikipedia.org/wiki/Bubble_sort
// Worst case: O(n^2)
// Best case: O(n)
// Avg case: O(n^2)

function bubbleSort(valuesArray) {
    for (i = 0; i < valuesArray.length; i++){
        for (j = 0; j < valuesArray.length - 1; j++) {
            if (valuesArray[j] > valuesArray[j + 1]) {
                var a = valuesArray[j];
                valuesArray[j] = valuesArray[j + 1];
                valuesArray[j + 1] = a;
            }
        }
    }
    return valuesArray;
}

