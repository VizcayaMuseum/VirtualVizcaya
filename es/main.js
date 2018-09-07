/* Refresh/Redirect Functions
*****************************************************/
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
    var header = parentWin.document.getElementsByClassName('demo-header')[0];
    var drawer = parentWin.document.getElementsByClassName('demo-drawer')[0];
    var button = parentWin.document.getElementsByClassName('mdl-layout__drawer-button')[0];
    header.style.opacity = "0.8";
    drawer.style.opacity = "0.8";
    button.style.display = "none";
}

function opacityOff() {
    parentWin = window.parent;
    var header = parentWin.document.getElementsByClassName('demo-header')[0];
    var drawer = parentWin.document.getElementsByClassName('demo-drawer')[0];
    var button = parentWin.document.getElementsByClassName('mdl-layout__drawer-button')[0];
    header.style.opacity = "1";
    drawer.style.opacity = "1";
    button.style.display = "inline-block";
}


/* Link functions for Index: Credits Modal
*****************************************************/
function darumatechLink(){
	window.open('https://www.darumatech.com','_blank');
}
function fiuLink(){
	window.open('http://carta.fiu.edu/innovlab','_blank');
}
function ufLink(){
	window.open('https://dcp.ufl.edu/historic-preservation/envision-heritage','_blank');
}

function vrEng(){
    window.open('http://virtualvizcaya.org/vr/index.html','_blank');
}

function vrEsp(){
    window.open('http://virtualvizcaya.org/vr/es/index.html','_blank');
}

/* Function to change Touch to HotspotName
*****************************************************/
function changeHotspotName(newName){
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

/* Functions to show and hide annotations' descriptions
*****************************************************/
function showDescription(annotationNum) {
    const descriptions = document.getElementsByClassName("annotation-description");
    var description = descriptions[annotationNum];
    description.style.display = "block";
}

function hideDescriptions() {
    var descriptions = document.getElementsByClassName("annotation-description");
    for (i = 0; i < descriptions.length; i++) {
        var descript = descriptions[i];
        descript.style.display = "none";
    }
}

/* Solution to Hide Dropup List when an Option is Selected
*****************************************************/
function hideList() {
    var openLink = document.getElementsByClassName('link');

    for (i = 0; i < openLink.length; i++) {
        var linkOpen = openLink[i];
        linkOpen.addEventListener('click', clickHandler, false);
    }

    function clickHandler() {
        var submenu = document.getElementById('lists');
        submenu.style.display = 'none';
    }
}

/* Tutorial Popup
*****************************************************/
function tutorialPopup() {

    $("#nav_panel").fadeIn();
    opacityOn();

    var navPanel = document.getElementById('nav_panel');
    navPanel.addEventListener('click', function () {
        $("#nav_panel").fadeOut();
        opacityOff();
    });
}

/* Tutorial Popup2
*****************************************************/
function tutorialPopup2() {

    $("#nav_panel").fadeIn();
    var navPanel = document.getElementById('nav_panel');
    navPanel.addEventListener('click', function () {
        navPanel.style.display = "none";
    });
}