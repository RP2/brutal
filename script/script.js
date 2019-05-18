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
    videoId: 'hHW1oY26kxQ',
    playerVars: {
        "autoplay":1,
        "loop":1,
        "playlist":"hHW1oY26kxQ",
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
    if ($(window).scrollTop() >= $("#random_shit").outerHeight() && player.isMuted()){
        player.pauseVideo(1);
    } else {
        player.playVideo(1);
    }
});

$(".volume").on("click", function(){
    if (player.isMuted()){
        player.unMute();
        player.playVideo(1);
        $("#un_mute").toggle();
        $("#mute").toggle();
    } else {
        player.mute();
        $("#un_mute").toggle();
        $("#mute").toggle();
    }
});