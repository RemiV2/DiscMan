export default () => {
  console.log('test')
  const firstStart = document.querySelector('.first-start')

  document.addEventListener('dragover', e => {
    // Prevent app from opening file
    e.preventDefault()
    console.log('dragover')
    firstStart.classList.add('active')
    firstStart.classList.add('dragged-over')
  })

  document.addEventListener('dragleave', e => {
    e.preventDefault()
    firstStart.classList.remove('dragged-over');
  })

  // document.ondrop = (event) => {
  //   $('.firstStart').removeClass('draggedOver');
  //   event.preventDefault();
  //   var items = event.dataTransfer.items;
  //   for (var i=0; i<items.length; i++) {
  //     var item = items[i].webkitGetAsEntry();
  //     if (item) {
  //       traverseFileTree(item);
  //     }
  //   }
  //   checkLibrary();
  //   return false;
  // }

  function traverseFileTree(item, path) {
    path = path || "";
    if (item.isFile) {
      // Get file
      item.file(function(file) {
        if (file.type.substring(0,5) == 'audio') {
          musicLibrary = JSON.parse(localStorage.getItem('musicLibrary'));
          musicLibrary.push(file.path);
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
}