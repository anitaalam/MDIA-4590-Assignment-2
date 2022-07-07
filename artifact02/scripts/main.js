// ===== SLICK SLIDER ===== //
$(document).ready(function(){
  metaTicker.innerHTML = artist[0] + ' - ' + songTitle[0];

    $('#cover-track').slick({
      slidesToShow: 1,
      dots: true,
      arrows: false,
      mobileFirst: true
    });
    $('#cover-track').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      
      metaTicker.innerHTML = artist[nextSlide] + ' - ' + songTitle[nextSlide];


      var tracksource = $('.slick-slide[data-slick-index=' + nextSlide + ']').find ('.album-cover').data('track');
      var source = document.getElementById('audioSource');
      var audioElm = document.getElementById('audio');
      if(!audioElm.paused) {
        source.src = tracksource;
        music.load();
        playAudio();
      }
    });
  });




// ===== AUDIO CONTROLS ===== //
// Variables
var music = document.getElementById('audio');
var playBtn = document.getElementById('playBtn');
var volVal = document.getElementById('volume');
var volMute = document.getElementById('volumeLabel');
var metaTicker = document.getElementById('metaTicker');

// Play, Pause Button
function playAudio() {
  if(music.paused) {
    music.play();
    playBtn.className = "pause"
  } else {
    music.pause();
    playBtn.className = "play"
  }
}

playBtn.addEventListener("click", playAudio);

// Volume Adjustment
function setVol(volume) {
  music.volume = volume;
}

// Volume Mute
function setVolNone() {
  if(music.volume > 0) {
      music.volume = 0;
      volVal.value = 0;
  } else {
      music.volume = 1;
      volVal.value = 1;
  }
}

volMute.addEventListener("click", setVolNone);


// Select Song 
var artist = [
  'ITZY',
  'Red Velvet',
  'TWICE',
  'Punch',
  'TWICE',
  'Lisa'
];

var songTitle = [
  'Icy',
  'Queendom',
  'Cry For Me',
  'Sometimes',
  'The Feels',
  'Money'
]

var list = $('.album-cover').click(function(e) {
  e.preventDefault();
  var elm = e.target;
  var source = document.getElementById('audioSource');
  source.src = elm.getAttribute('data-track');
  music.load();
  playAudio();
});