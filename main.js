var circle = document.getElementById("circle");
var upButton = document.getElementById("upButton");
var downButton = document.getElementById("downButton");

var rotateFeature = circle.style.transform;
var rotateSum;

upButton.onclick = function () {
    rotateSum = rotateFeature + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateFeature = rotateSum;
}

downButton.onclick = function () {
    rotateSum = rotateFeature + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateFeature = rotateSum;
}