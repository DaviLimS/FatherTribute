let modeButton = document.getElementById("lightDark");
let body = document.body;
let modeTest;
let instaButton = document.getElementById("instagram");
let githubButton = document.getElementById("github");
let twiterButton = document.getElementById("twitter");
let linkedinButton = document.getElementById("linkedin");
let loading = document.getElementById("loading");

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

function button() {
    alert("Eu te amo!!!!!!!!!!!!!!!!!");
}

function openInstagram() {
    window.open("https://www.instagram.com/_davi.lim_/")
}

function openGithub() {
    window.open("https://github.com/DaviLimS");
}

function openTwitter() {
    window.open("https://twitter.com/Blwkz1");
}

function openLinkedin() {
    alert("Estou pensando se crio ou não uma conta lá");
}

modeButton.addEventListener("click", toggle);
twiterButton.addEventListener("click", openTwitter);
linkedinButton.addEventListener("click", openLinkedin);
instaButton.addEventListener("click", openInstagram);
githubButton.addEventListener("click", openGithub);

//exibe o carregamento
function load() {
    loading.classList.add("active")
}

//fecha o carregamento
function closeLoad() {
    loading.classList.remove("active");
}

load();
setTimeout(closeLoad, 2000);