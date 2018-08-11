/* Refresh/Redirect Functions
*****************************************************/
function redirectFunc() {
    window.top.location.reload();
}

function refreshButton() {
    window.top.location.reload();
}

function refreshPopup() {
    location.reload();
}

function redirectHomeFunc() {
    window.top.location.href = "../index.html";
}

/* Barge Toggles
*****************************************************/
function barge1916Button() {
    window.top.location.assign("../1916barge.html?0");
}
function barge2017Button() {
    window.top.location.assign("../barge.html?0");
}

/* Herm Toggles
*****************************************************/
function herm1916Button() {
    window.parent.location.replace("../1916Herm.html");
}
function herm2017Button() {
    window.parent.location.replace("../2017herm.html");
}

/* Sculptures Toggles
*****************************************************/
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

/* Applying Opacity to Parent's Split Container
*****************************************************/
function opacityOn() {
    parentWin = window.parent;
    var sidebar = parentWin.document.getElementById('split-container');
    sidebar.style.opacity = "0.5";
}

function opacityOff() {
    parentWin = window.parent;
    var sidebar = parentWin.document.getElementById('split-container');
    sidebar.style.opacity = "1";
}

/* Link functions for Index: Credits Modal
*****************************************************/
function darumatechLink() {
    window.open('https://www.darumatech.com', '_blank');
}
function fiuLink() {
    window.open('http://carta.fiu.edu/innovlab', '_blank');
}
function ufLink() {
    window.open('https://dcp.ufl.edu/historic-preservation/envision-heritage', '_blank');
}

/* Function to change Touch to HotspotName
*****************************************************/
function changeHotspotName(newName) {
    document.getElementById('hotspotName').innerHTML = newName;
}

/* Update Videos on Irma's Page
*****************************************************/
function updateMainVideo(newVideo, newText) {
    var videoContainer = document.getElementById('main-video');
    var videoSource = document.getElementById('source_video');

    videoContainer.pause();
    videoSource.setAttribute('src', newVideo);
    videoContainer.load();
    videoContainer.play();

    document.getElementById('sidebar-text').innerHTML = newText;
}