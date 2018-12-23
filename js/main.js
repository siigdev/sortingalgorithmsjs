let numberOfValues = 500;
let valuesRange = 10;
valuesArray = [];


window.onload = function() {
    for (var i = 0; i<numberOfValues; i++) {
        let number = Math.floor((Math.random()*valuesRange)+0);
        valuesArray.push(number);
    }
    document.getElementById("generate").onclick = function(){
        document.getElementById("test").innerHTML = valuesArray;
    }
}