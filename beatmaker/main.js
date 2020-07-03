window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#6860d3",
        "#60b2d3"
    ]

    // lets get going with the sound here
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            //make it possible to click and play the sound again while it is playing
            sounds[index].currentTime = 0;

            sounds[index].play();

            // call the make bubble function
            createBubbles(index);
        });
    });

    // Create a function that makes bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation ='jump 1s ease';
        // the created child(bubble) will immediately deleted in html-file
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        })
    }
});