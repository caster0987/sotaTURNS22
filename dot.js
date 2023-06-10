$(document). bind("contextmenu",function(e){ return false; });

$(document).ready(function () {
  var ambit = $(document);


  ambit.on('copy paste cut', function (e) {
    e.preventDefault();
    return false;
  });
});

document.addEventListener("keydown", function (event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
});

function show(){
    alert("A brother gifted with artistic might,  drawing colors, a world takes flight.   His voice, a melody, sweet and pure,   singing songs that forever endure. Through pages, he delves into tales. Reading, his spirit ever prevails. Amidst new faces that may appear,  he stands by me, unwaveringly near.  With his talents and loyalty true, my brother's love, forever in view.  United we stand, no matter the strife, bound by a bond, throughout our life.");
}

const playButton = document.getElementById('playButton');
const audio = document.getElementById('myAudio');

// Add click event listener to the button
playButton.addEventListener('click', function() {
  // Check if the audio is paused
  if (audio.paused) {
    // Play the audio
    audio.play();
  } else {
    // Pause the audio
    audio.pause();
  }
});


