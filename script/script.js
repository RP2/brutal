$(window).ready(function(){
    let date = new Date().toLocaleDateString();
    $("#date").text("today is " + date);
})

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'l_eIvgbX6rM',
    playerVars: {
        "autoplay":1,
        "loop":1,
        "playlist":"l_eIvgbX6rM",
        "modestbranding":1,
        "autohide":1,
        "showinfo":0,
        "controls":0,
        "mute":1,
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        player.previousVideo();
    }
}


$(window).scroll(function(event) {
    if ($(window).scrollTop() >= $("#video_contain").outerHeight()){
        player.pauseVideo(1);
    } else {
        player.playVideo(1);
    }
});