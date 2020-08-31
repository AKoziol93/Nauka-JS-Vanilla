function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}



function playSoundClick() {

    var textSound;
    var textSound = document.getElementById(`textview`);
    var soundString;
    soundString = JSON.stringify(textSound);
    console.log(soundString);

    var i = 0;
    var soundStringLength = soundString.length;

    for (i; i <= soundStringLength + 1; i++) {
        var character = document.from.textview.value.toUpperCase().charCodeAt(i);
        setTimeout(playSound(character), 700);
    }

}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
const id = Array.from(document.querySelectorAll('.id'));
window.addEventListener('keydown', playSound);
// const button = document.getElementById('playButton');
// button.addEventListener('click', playSoundClick);