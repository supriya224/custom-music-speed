const container = document.querySelector(".container"); // main container ko select krne k liye
mainVideo = container.document.querySelector(".video"); //container ke andar video tag ko select krne ke liye
playPauseBtn = container.querySelector(".play-pause i"); // containe ke andar button tag ke class .play-pause k (i) ko select krne k liye

playPauseBtn.addEventLister("click", () => {
    // if video is paused, pplay the video else pause the video
  mainVideo.paused ? mainVideo.play() : mainVideo.pause();// agr mainVideo k andar paused hai tb video play hona chiaye other wise wo inital pause rhega
});













