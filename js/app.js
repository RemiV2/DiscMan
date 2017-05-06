var remote = require('electron').remote,
dialog = remote.dialog,
musicLibrary = localStorage.getItem('musicLibrary');
// localStorage.setItem("musicLibrary", JSON.stringify(musicLibrary));

if (musicLibrary === null) {
  // if user has no music
  musicLibrary = new Array();
  localStorage.setItem("musicLibrary", JSON.stringify(musicLibrary));
} else {
  // if user has already imported music
  checkLibrary();
}

$('.playpause').on('click', function(){
  $(this).toggleClass('playing');
});

function openFile() {
  dialog.showOpenDialog(function (fileNames) {

  });
}

var card;

function checkLibrary() {
  musicLibrary = JSON.parse(localStorage.getItem('musicLibrary'));
  if (musicLibrary.length > 0) {
    // get rid of 'first start' page
    $('.firstStart').hide();
    $('.content').show();
  }
  console.log(musicLibrary);
  //displayMusic();

  for (i=0; i<musicLibrary.length; i++) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = "arraybuffer";
    xhr.open("get", musicLibrary[i], true);
    let j = i; // avoid closure problem where only last iteration is executed
    xhr.onload = function(e) {

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
    console.log(result);
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

// function displayMusic(index) {
//   displaySongs(index);
//   displayAlbums(index);
//   displayArtists(index);
// }

// function displaySongs(index) {
//   // code
//   $('#songsTab').append(card);
//   $('#songsTab #' + index + '.title').html = JSON.stringify(result, undefined, 2);
//
// }
//
// function displayAlbums(index) {
//   // code
// }
//
// function displayArtists(index) {
//   // code
// }
