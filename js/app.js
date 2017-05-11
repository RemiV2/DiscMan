var remote = require('electron').remote,
ipcRenderer = require('electron'),
dialog = remote.dialog,
musicLibrary = localStorage.getItem('musicLibrary'),
card, playingCardIndex,
audio = $('.player audio'),
alphabeticallyOrderedDivs;

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
    displayMusic();
    // Sort alphabetically
    alphabeticallyOrderedDivs = $('#songsTab .card').sort(function (a, b) {
        return $(a).find(".title").text() > $(b).find(".title").text();
    });
    console.log(alphabeticallyOrderedDivs);
    $('#songsTab').html(alphabeticallyOrderedDivs);
  }
}

function displayMusic(){
  for (i=0; i<musicLibrary.length; i++) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = "arraybuffer";
    xhr.open("get", musicLibrary[i], true);
    let j = i; // avoid closure problem where only last iteration is executed
    xhr.onload = function(e) {
      //console.log(e.target.response);
      showMetaData(e.target.response, j);
      //displayMusic(i);
    }
    xhr.send();
  }
}

function showMetaData(data, index) {
  musicmetadata(data, function (err, result) {
    card = "<div class='card' id='" + index + "'> <div class='art'></div> <div class='info'> <p class='title'>Song name</p> <p class='details'>Album Name</p> </div> </div>";
    if (err) throw err;
    // create song card and show details
    $('#songsTab').append(card);
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
  if (audio.attr('src') == undefined) {
    console.log('yeeepeeee');
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
  //audio.play();
});

$('.playpause').on('click', function(){
  if ($(this).hasClass('playing')) {
    audio[0].pause();
  } else {
    audio[0].play();
  }
  $(this).toggleClass('playing');
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
  $(this).toggleClass('muted');
});

$('.volume input').on('input', function(){
  // update volume on slider change
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
  console.log('ended');
  nextSong();
}

function previousSong() {
  playingCardIndex--;
  playMusic(musicLibrary[playingCardIndex], playingCardIndex);
}

function nextSong() {
  playingCardIndex++;
  playMusic(musicLibrary[playingCardIndex], playingCardIndex);
}
