
window.addEventListener('keydown', function(e){
    const player = document.querySelector(`audio[data-key="${e.code}"]`);
    const keyStroke = document.querySelector(`.key[data-key="${e.code}"]`);
    if(!keyStroke) return;
    keyStroke.classList.add('active');
    if(!player)
        return;
    player.currentTime = 0;
    player.play();
})
function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    console.log(e.propertyName);
    this.classList.remove('active')
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));