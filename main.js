//Redirect functions
function redirectFunc() {
    window.top.location.reload();
}

function refreshButton() {
    window.top.location.reload();
}

function refreshPopup(){
    location.reload();
}

function redirectHomeFunc() {
    window.top.location.href = "../index.html";
}

/*Barge Toggles*/
function barge1916Button() {
    window.top.location.assign("../1916barge.html?0");
}
function barge2017Button() {
    window.top.location.assign("../barge.html?0");
}

/*Herm Toggles*/ /*DON'T USE WINDOW.TOP*/
function herm1916Button() {
    window.parent.location.replace("../1916Herm.html");
}
function herm2017Button() {
    window.parent.location.replace("../2017herm.html");
}

/*Sculptures Toggles*/
function sculptures1916Button() {
    window.parent.location.assign("../1916Mermaids.html");
}
function sculptures2017Button() {
    window.parent.location.assign("../mermaids.html");
}

/* HTML5 Fullscreen API
*****************************************************/
function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}
