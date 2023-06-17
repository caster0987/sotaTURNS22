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
const playButton = document.getElementById('playButton');
const audio = document.getElementById('myAudio');
function playSongWithAlert() {  
  audio.play();
  setTimeout(function() {
    const message = "A brother gifted with artistic might, drawing colors, a world takes flight.\n" +
    "His voice, a melody, sweet and pure, singing songs that forever endure.\n" +
    "Through pages, he delves into tales. Reading, his spirit ever prevails.\n" +
    "Amidst new faces that may appear, he stands by me, unwaveringly near.\n" +
    "With his talents and loyalty true, my brother's love, forever in view.\n" +
    "United we stand, no matter the strife, bound by a bond, throughout our life.";
    alert(message);
    audio.play();
  }, 1000);
}
playButton.addEventListener('click', playSongWithAlert);
