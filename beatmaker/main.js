window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    console.log(sounds);

    // lets get going with the sound here
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            //make it possible to click and play the sound again while it is playing
            sounds[index].currentTime = 0;
            
            sounds[index].play();
        });
    });
});