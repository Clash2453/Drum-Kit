function playSound(e){ //Add event to listen for the correct keypress to play a sound
    const player = document.querySelector(`audio[data-key="${e.code}"]`);
    const keyStroke = document.querySelector(`.key[data-key="${e.code}"]`);
    if(!keyStroke) return;
    keyStroke.classList.add('active');
    if(!player)
        return;
    player.currentTime = 0;
    player.play();
}

window.addEventListener('keydown', playSound);

function removeTransition(e){ //Reverts the .key to its original state
    if(e.propertyName !== 'transform') return;
    console.log(e.propertyName);
    this.classList.remove('active')
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));//loop through all keys and to subscribe them for removeTransition