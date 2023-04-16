
/*showcase #1 toggle button*/

const buttonToggleMyH1 = document.getElementById("toggleMyH1");

buttonToggleMyH1.addEventListener(
    "click", 
    function() {
        toggleColor();
    },
    false
);

let color = "red";

function toggleColor() {
    document.getElementById("toggleMyH1").innerHTML = "Make it " + color + "!";
    if (color === "red") {
        color = "blue"
    } else {
        color = "red";
    }
    document.getElementById("myH1").innerHTML = color;
    document.getElementById("myH1").style = "color:"+color;
}








