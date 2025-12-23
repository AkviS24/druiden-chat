console.log("System Run...");


// Globals

const nameRef = document.getElementById("name");
const messageRef = document.getElementById("message");
const userOutput = document.getElementById("userOutput");
const botOutput = document.getElementById("botOutput");
const errorRef = document.getElementById("error");
const ausgabeRef = document.getElementById("ausgabe");
const darkmodeBtn = document.getElementById("darkmodeBtn");
const druideRef = document.getElementById("druidenBild");
const headline = document.getElementById("h1");
let questCounter = 0;
let darkmodeOn = false;

function printmessage() {
    checkMessage();
    console.log("Funktion ausgeführt");
    questCounter++;
    userOutput.classList.remove("notDisplay");
    botOutput.classList.remove("notDisplay");
    userOutput.innerHTML = `<b>${nameRef.value}:</b>` + ` ${messageRef.value}`;
    if (messageRef.value == "Hallo") {
        botOutput.innerHTML = "Hi " + `${nameRef.value}` + " schön das du da bist";
    } else if (questCounter > 3) {
        botOutput.innerHTML = "";
        botOutput.innerHTML = "Schluss jetzt mit diesem <b>albernen</b> Rumgefrage ich muss Druiden Dinge machen...";
    } else if (messageRef.value == "Was ist der Sinn des Lebens?") {
        botOutput.innerHTML = "";
        botOutput.innerHTML = "Nach langem Überlegen, komme ich zu der Ansicht, dass die Antwort auf dein Frage nur <b>42</b> sein kann.";
    }
    else {
        botOutput.innerHTML = "";
        botOutput.innerHTML = "Passe, nächste Frage";
    }
}

function checkMessage() {
    if (nameRef.value.length < 3 || messageRef.value.length < 4) {
        errorRef.classList.remove("notDisplay");
    }
}

function verstanden() {
    errorRef.classList.add("notDisplay");
}

function darkmode() {
    if (!darkmodeOn) {
        ausgabeRef.classList.toggle("messenger-darkmode");
        druideRef.src = "../img/girl-7102266_640.png";
        headline.style.color = "white";
        darkmodeOn = true;
    }else {
        ausgabeRef.classList.toggle("messenger-darkmode");
        druideRef.src = "../img/woman-8793320_640.png";
        headline.style.color = "black";
        darkmodeOn = false;
    }
}