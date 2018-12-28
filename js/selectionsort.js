// SELECTION SORT
// https://en.wikipedia.org/wiki/Selection_sort
// Worst case: O(n^2)
// Best case: O(n^2)
// Avg case: O(n^2 )


export function selectionSort(valuesArray) {
    let j;
    let smallest;
    for (j=0; j < valuesArray.length-1; j++){
        smallest = j;
        for (let i = j+1; i < valuesArray.length; i++){
            if (valuesArray[i] < valuesArray[smallest]){
                smallest = i;
            }
        }
        var a = valuesArray[j];
        valuesArray[j] = valuesArray[smallest];
        valuesArray[smallest] = a;
    }
    return valuesArray;

}