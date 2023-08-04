let modeButton = document.getElementById("lightDark");
let body = document.body;
let modeTest;

function toggle() {
    if(body.classList.contains("dark1")) {
        modeTest = false;
    }
    else {
        modeTest = true;
    }

    if(modeTest) {
        body.classList.toggle("dark1");
    }
    else {
        body.classList.toggle("light1");
    }
}

modeButton.addEventListener("click", toggle);

function button() {
    alert("Eu te amo!!!!!!!!!!!!!!!!!");
}