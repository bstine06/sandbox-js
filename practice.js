
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

/*showcase #2 login prompt*/

const buttonPromptLogin = document.getElementById("promptLogin");

buttonPromptLogin.addEventListener(
    "click",
    function() {
        promptLogin();
    },
    false  
);

function promptLogin() {
    let username = prompt("Enter your username:");
    let password;
    if (username === "Admin") {
        password = prompt("Enter your password");
        if (password === "TheMaster") {
            alert("Welcome!");
        } else if (password === null || password === ""){
            alert("Canceled");
        } else {
            alert("Wrong password");
        }
    } else if (username === null || username === "") {
        alert("Canceled");
    } else {
        alert("I don't know you");
    };
    //alert(password);
}

/*showcase #3 functions practice*/

let funcsInput1 = document.getElementById("input1");
let funcsInput2 = document.getElementById("input2");
let funcsSelect = document.getElementById('funcs-select');
let funcsButton = document.getElementById('funcs-button');
let funcsOutput = document.getElementById("funcs-output");

funcsSelect.addEventListener(
    "change",
    () => {
        funcsInput2.hidden = (funcsSelect.value === "Multiply") ? false : true;
    }
)

funcsButton.addEventListener(
    "click", 
    function() {
        let val1 = funcsInput1.value;
        let val2 = funcsInput2.value;
        switch (funcsSelect.value) {
            case "Add 7": 
                funcsOutput.textContent= add7(val1);
                break;
            case "Multiply":
                funcsOutput.textContent= multiply(val1,val2);
                break;
            case "Capitalize":
                funcsOutput.textContent= capitalize(val1);
                break;
            case "Last Letter":
                funcsOutput.textContent= lastLetter(val1);
                break;
        }
    }
);

function add7(num1) {
    return +num1+7;
}

function multiply(num1, num2) {
    return +num1 * +num2;
}

function capitalize(word) {
    return word.toUpperCase();
}

function lastLetter(word) {
    return word.substr(-1);
}

/* showcase #4 More DOM Manipulation */

const rgbSliders = document.querySelectorAll('.rgb-slider');
const colorDisplay = document.querySelector('#color-display');
colorDisplay.style.backgroundColor = 'rgb(255,255,255)';
for (let rgbSlider of rgbSliders) {
    rgbSlider.addEventListener('input', 
        () => {
            const color = rgbSlider.id.split("-")[0];
            const colorText = document.querySelector(`#${color}-text`);
            colorText.textContent = rgbSlider.value;
            colorDisplay.style.backgroundColor = 
                updateColor(colorDisplay.style.backgroundColor, color, rgbSlider.value);
        }
    )
}

function updateColor(currentColor, color, value) {
    colorsArray = currentColor.split(",");
    console.log(colorsArray);
    colorsArray[0] = colorsArray[0].split("(")[1];
    colorsArray[2] = colorsArray[2].split(")")[0];
    console.log(colorsArray);
    console.log(color);
    let index = 0;
    switch (color) {
        case "red":  index = 0; break;
        case "green":index = 1; break;
        case "blue": index = 2; break;
    }
    colorsArray[index] = value;
    return `rgb(${colorsArray[0]},${colorsArray[1]},${colorsArray[2]})`;
}









