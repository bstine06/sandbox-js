
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










