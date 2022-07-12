window.addEventListener('keydown', function(e){
    const player = document.querySelector(`audio[data-key="${e.code}"]`);
    if(!player)
        return;
    player.currentTime = 0;
    player.play();
})