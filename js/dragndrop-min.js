document.ondragover = (event) => {
  // Prevent app from opening file
  event.preventDefault();
  $('.firstStart').show().addClass('draggedOver');
  return false;
}

document.ondragleave = document.ondragend = () => {
  $('.firstStart').removeClass('draggedOver');
  return false;
}

document.ondrop = (event) => {
  $('.firstStart').removeClass('draggedOver');
  event.preventDefault();
  var items = event.dataTransfer.items;
  for (var i=0; i<items.length; i++) {
    var item = items[i].webkitGetAsEntry();
    if (item) {
      traverseFileTree(item, items.length, i);
    }
  }
  setTimeout(checkLibrary, 1000);
  return false;
}

function traverseFileTree(item, path, length, i) {
  path = path || "";
  if (item.isFile) {
    // Get file
    item.file(function(file) {
      // Only accept audio files
      if (file.type.substring(0,5) == 'audio' && file != null && file != undefined) {
        musicLibrary = JSON.parse(localStorage.getItem('musicLibrary'));
        if (musicLibrary == null) {
          musicLibrary = new Array();
        }
        musicLibrary.push(file.path);
        // save updated library
        localStorage.setItem("musicLibrary", JSON.stringify(musicLibrary));
      }
    });
  } else if (item.isDirectory) {
    // Get folder contents
    var dirReader = item.createReader();
    dirReader.readEntries(function(entries) {
      for (var i=0; i<entries.length; i++) {
        traverseFileTree(entries[i], path + item.name + "/");
      }
    });
  }
}
