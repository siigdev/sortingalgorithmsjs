let numberOfValues = 50;
let valuesRange = 50;
valuesArray = [];


window.onload = function() {
    for (var i = 0; i<numberOfValues; i++) {
        let number = Math.floor((Math.random()*valuesRange)+0);
        valuesArray.push(number);
    }
    
    document.getElementById("generate").onclick = function(){
        var start = new Date().getTime();
        document.getElementById("test").innerHTML = bubbleSort(valuesArray);
        var stop = new Date().getTime();
        var time = stop-start;
        document.getElementById("time").innerHTML = time + "ms";   
    }
}