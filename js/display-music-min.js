var card = "<div class='card' id=''> <div class='art'></div> <div class='info'> <p class='title'>Song name</p> <p class='details'>Album Name</p> </div> </div>";

/* for (i=0; i<musicLibrary.length; i++) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = "arraybuffer";
  xhr.open("get", url, true);
  xhr.onload = function(e) {
    console(showMetaData(e.target.response));
  }
  xhr.send();
} */

var fileParser = new XMLHttpRequest();
fileParser.responseType = "arraybuffer";
fileParser.open("get", url, true);
xhr.onload = function(e) {
  showMetaData(e.target.response);
}
xhr.send();

function displayMusic() {
  displaySongs();
  displayAlbums();
  displayArtists();
}

function displaySongs() {
  // code
}

function displayAlbums() {
  // code
}

function displayArtists() {
  // code
}


