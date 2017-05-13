var remote = require('electron').remote,
ipcRenderer = require('electron'),
dialog = remote.dialog,
musicLibrary = localStorage.getItem('musicLibrary'),
card, playingCardIndex,
audio = $('.player audio'),
orderedDivs;

// ipcRenderer.on('global-shortcut', function (arg) {
//     if (arg == 'next') {
//       nextSong();
//     }
// });

if (musicLibrary === null) {
  // if user has no music
  musicLibrary = new Array();
  localStorage.setItem("musicLibrary", JSON.stringify(musicLibrary));
} else {
  // if user has already imported music
  checkLibrary();
}

function checkLibrary() {
  musicLibrary = JSON.parse(localStorage.getItem('musicLibrary'));
  if (musicLibrary.length > 0) {
    // get rid of 'first start' page
    $('.firstStart').hide();
    $('.content').show();
    // delete duplicates
    musicLibrary = musicLibrary.filter(function(elem, index, self) {
      return index == self.indexOf(elem);
    });
    localStorage.setItem("musicLibrary", JSON.stringify(musicLibrary));
    displayMusic();
  }
}

function displayMusic(){
  // initialize cards to prevent duplicates
  $('#songsTab').html('');
  counter = 0;
  for (i=0; i<musicLibrary.length; i++) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = "arraybuffer";
    xhr.open("get", musicLibrary[i], true);
    counter++;
    let j = i; // avoid closure problem where only last iteration is executed
    xhr.onload = function(e) {
      showMetaData(e.target.response, j);
      //displayMusic(i);
    }
    xhr.send();
  }
  console.log('should be after');
}

function sortContent(parent, criteria) {
  orderedDivs = $('#' + parent + ' .card').sort(function (a, b) {
    a = $(a).find('.' + criteria).text().toUpperCase();
    b = $(b).find('.' + criteria).text().toUpperCase();
    if (a<b) return -1;
    if (a>b) return 1;
    if (a=b) return 0;
  });
  $('#' + parent).html(orderedDivs);
  // update index number based on new sorting
  updateIndexes(parent);
  updateLibrary(parent);
}

function updateIndexes(parent) {
  for (k=0; k<$('#' + parent + ' .card').length; k++) {
    $($('#' + parent + ' .card')[k]).attr('id', k);
  }
}

function updateLibrary(parent) {
  var newMusicLibrary = new Array();
  // check matches between song titles and filenames
  // to update musicLibrary based on the new sorted divs order
  for (l=0; l < $('#' + parent + ' .card').length; l++) {
    var title = $($($('#' + parent + ' .card')[l]).find('.title')[0]).text();
    for (m=0; m<musicLibrary.length; m++) {
      if (musicLibrary[m].includes(title)) {
        //console.log('match');
        newMusicLibrary[l] = musicLibrary[m];
      }
    }
  }
  musicLibrary = newMusicLibrary;
  localStorage.setItem("musicLibrary", JSON.stringify(musicLibrary));
}

function showMetaData(data, index) {
  musicmetadata(data, function (err, result) {
    card = "<div class='card' id='" + index + "'> <div class='art'></div> <div class='info'> <p class='title'>Song name</p> <p class='details'>Album Name</p> </div> </div>";
    if (err) throw err;
    // create song card and show details
    $(card).appendTo('#songsTab').ready(function(){
      // Order items if it's the last card
      if (index == musicLibrary.length-1) {
        console.log('lastie');
        sortContent('songsTab', 'title');
      }
    });
    $('#songsTab #' + index + ' .title').html(result.title); // song name
    $('#songsTab #' + index + ' .details').html(result.artist[0]); // artist
    if (result.picture.length > 0) {
      // add album cover art
      var picture = result.picture[0];
      var url = URL.createObjectURL(new Blob([picture.data], {'type': 'image/' + picture.format}));
      $('#songsTab #' + index + ' .art').css({
        'background': 'url(' + url + ')',
        'background-size': 'cover'
      });
    }
  });
}

function playMusic(source, index) {
  // update audio tag with selected source
  audio.attr('src', source);
  // make sure play button becomes pause
  $('.playpause').addClass('playing');
  if (audio[0].paused) {
    audio[0].play();
  }
  // update footer player with current song's metadata
  var newArt = $('#' + index + ' .art').css('background');
  $('.player .art').css({
    'background' : newArt,
    'background-size' : 'cover'
  });
  $('.player .title').text($('#' + index + ' .title').text());
  $('.player .artist').text($('#' + index + ' .details').text());
}

// Play music on card click
$(document).on('click', '.card', function() {
  // reveal bottom player if it's the first song to be played
  if (audio.attr('src') == undefined) {
    $('.player').css('display', 'flex').animate({'bottom': '0px'}, 600);
    $('.content').animate({
      'min-height': '-86px',
      'bottom': '86px'
    }, 600);
  }
  if (!audio[0].paused) {
    audio[0].pause();
  }
  playingCardIndex = $(this).attr('id');
  playMusic(musicLibrary[playingCardIndex], playingCardIndex);
});

// Play or pause on space bar press
$(window).keypress(function(e) {
  // don't play or pause if no song is selected
  if (e.which == 32 && audio.attr('src') != undefined) {
    e.preventDefault();
    playOrPause();
  }
});

// Handle click on play/pause button
$('.playpause').on('click', function(){
  playOrPause();
});

$('.next').on('click', function(){
  nextSong();
});

$('.previous').on('click', function(){
  previousSong();
});

$('.soundonoff').click(function() {
  if ($(this).hasClass('muted')) {
    // turn on sound
    if ($('.volume input').value != undefined) {
      audio[0].volume = $('.volume input').value;
    } else {
      audio[0].volume = 0.8;
    }
  } else {
    audio[0].volume = 0;
  }
  $(this).toggleClass('muted'); // switch icon
});

// update volume on slider change
$('.volume input').on('input', function(){
  audio[0].volume = this.value;
  if (this.value == 0) {
    $('.soundonoff').addClass('muted');
  } else {
    $('.soundonoff').removeClass('muted');
  }
});

$('#timeControl').on('input', function(){
  audio[0].currentTime = this.value * audio[0].duration;
});

// Keep track of audio position in progress bar
audio[0].ontimeupdate = function() {
  $('#timeControl').val(this.currentTime / this.duration);
};

audio[0].onended = function() {
  nextSong();
}

function playOrPause() {
  if ($('.playpause').hasClass('playing')) {
    audio[0].pause();
  } else {
    audio[0].play();
  }
  $('.playpause').toggleClass('playing'); // switch icon
}

function previousSong() {
  // Only allow if current song is not the first one
  if (playingCardIndex > 0)
  playingCardIndex--;
  playMusic(musicLibrary[playingCardIndex], playingCardIndex);
}

function nextSong() {
  // Only allow if current song is not the last one
  if (playingCardIndex < musicLibrary.length-1) {
    playingCardIndex++;
    playMusic(musicLibrary[playingCardIndex], playingCardIndex);
  }
}

// BUG: drag n drop only works second timeControl
// BUG: audio index not matching playing file
// BUG: duplicate song divs

// TODO: Save HTML in localStorage
// TODO: Album and Artist tabs
// TODO: Fix drag n drop only working 2nd time
// TODO: Dark Theme
