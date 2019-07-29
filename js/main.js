import {insertionSort} from './insertionsort.js';
import {bubbleSort} from './bubblesort.js';
import {heapSort} from './heapsort.js';
import {mergeSort} from './mergesort.js';
import {quickSort} from './quicksort.js';
import {radixSort} from './radixsort.js';
import {selectionSort} from './selectionsort.js';

let arr = [];
window.onload = function() {
    document.getElementById("generate").onclick = function(){
        arr = [];
        let numberOfValues = document.getElementById("arraySize").value;
        let valuesRange = document.getElementById("valueRange").value;
        let sortmethod = document.getElementById("sortMethod").value;
        for (var i = 0; i<numberOfValues; i++) {
            let number = Math.floor((Math.random()*valuesRange)+0);
            arr.push(number);
        }
        let start = new Date().getTime();

        function sortArray(type){
            let algorithms = {
                'insertionsort': () => insertionSort(arr),
                'selectionsort': () => selectionSort(arr),
                'mergesort': () => mergeSort(arr),
                'bubblesort': () => bubbleSort(arr),
                'heapsort': () => heapSort(arr),
                'quicksort': () => quickSort(arr),
                'radixsort': () => radixSort(arr),
            };
            return algorithms[type]();
        }

        document.getElementById("test").innerHTML = sortArray(sortmethod);
        var stop = new Date().getTime();
        var time = stop-start;
        document.getElementById("time").innerHTML = `${time} ms`;   
    };
};
export function swap(x, y) {
    [arr[x], arr[y]] = [arr[y], arr[x]];
}