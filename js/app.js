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

function checkLibrary() {
  musicLibrary = JSON.parse(localStorage.getItem('musicLibrary'));
  if (musicLibrary.length > 0) {
    // get rid of 'first start' page
    $('.firstStart').hide();
    $('.content').show();
  }
  console.log(musicLibrary);
  displayMusic();
}
