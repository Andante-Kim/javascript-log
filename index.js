// const = a variable that can't be changed

const PI = 3.14159;
let radius;
let cirsumference;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    cirsumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = cirsumference + "cm";
}