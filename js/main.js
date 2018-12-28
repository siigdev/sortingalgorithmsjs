import {insertionSort} from './insertionsort.js';
import {bubbleSort} from './bubblesort.js';
import {heapSort} from './heapsort.js';
import {mergeSort} from './mergesort.js';
import {quickSort} from './quicksort.js';
//import {radixSort} from './radixsort.js';
import {selectionSort} from './selectionsort.js';

var valuesArray = [];
window.onload = function() {
    document.getElementById("generate").onclick = function(){
        valuesArray = [];
        let numberOfValues = document.getElementById("arraySize").value;
        let valuesRange = document.getElementById("valueRange").value;
        let sortmethod = document.getElementById("sortMethod").value;
        for (var i = 0; i<numberOfValues; i++) {
            let number = Math.floor((Math.random()*valuesRange)+0);
            valuesArray.push(number);
        };
        var start = new Date().getTime();
        switch (sortmethod){
            case "insertionsort":
                document.getElementById("test").innerHTML = insertionSort(valuesArray);
                break;
            case "selectionsort":
                document.getElementById("test").innerHTML = selectionSort(valuesArray);
                break;
            case "mergesort":
                document.getElementById("test").innerHTML = mergeSort(valuesArray);
                break;
            case "bubblesort":
                document.getElementById("test").innerHTML = bubbleSort(valuesArray);
                break;
            case "radixsort":
                //document.getElementById("test").innerHTML = radixSort(valuesArray);
                break;
            case "quicksort":
                document.getElementById("test").innerHTML = quickSort(valuesArray);
                break;
            case "heapsort":
                document.getElementById("test").innerHTML = heapSort(valuesArray);
                break;
        }
        var stop = new Date().getTime();
        var time = stop-start;
        document.getElementById("time").innerHTML = time + "ms";   
    }
}
export function swap(x, y) {
    var b = valuesArray[y];
    valuesArray[y] = valuesArray[x];
    valuesArray[x] = b;
}