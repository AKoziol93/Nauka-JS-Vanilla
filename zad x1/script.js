var counter = 1;
var openNavVar = false;


function readTxt(counter) {
    var txtFile = new XMLHttpRequest();
    txtFile.open("Get", `http://localhost:3000/content/text-content/${counter}.txt`, true);
    txtFile.onreadystatechange = function() {
        if (txtFile.readyState === 4) {
            // Makes sure the document is ready to parse.  
            if (txtFile.status === 200) {
                // Makes sure it's found the file.  
                document.getElementById('textBody').innerHTML = txtFile.responseText;
            }
        }
    }
    txtFile.send(null);
}

function loadNextTxt() {

    if (counter < 10) {
        counter = counter + 1;
        console.log(counter);
    }
    readTxt(counter);

}

function loadPrevTxt() {

    if (counter > 1) {
        counter = counter - 1;
        console.log(counter);
    }
    readTxt(counter);
}

function openNav() {
    openNavVar = !openNavVar;
    if (openNavVar === true) {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }
    if (openNavVar === false) {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
}

function loadFromNav(i) {
    counter = i;
    readTxt(i);
}



window.addEventListener('DOMContentLoaded', readTxt(1));