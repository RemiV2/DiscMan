import parseFiles from './parseFiles.js'

export default () => {
  const firstStart = document.querySelector('.first-start')
  let newMusicPaths
  
  document.addEventListener('dragover', e => {
    // Prevent app from opening file
    e.preventDefault()
    firstStart.classList.add('active')
    firstStart.classList.add('dragged-over')
    // Reset new musics
    newMusicPaths = []
  })
  
  document.addEventListener('dragleave', e => {
    e.preventDefault()
    firstStart.classList.remove('dragged-over')
  })
  
  document.addEventListener('drop', e => {
    firstStart.classList.remove('dragged-over')
    e.preventDefault()
    const items = e.dataTransfer.items
    for (let i=0; i<items.length; i++) {
      var item = items[i].webkitGetAsEntry()
      if (item) {
        traverseFileTree(item)
          .then(path => {
            newMusicPaths.push(path)
            console.table(newMusicPaths)
            if (item === items[items.length-1]) {
              console.log('finished')
              //console.table(newMusicPaths)
            }
          })

      }
    }
    
    //const newMusic = parseFiles(newMusicPaths)
    // parseFiles(newMusicPaths)
  })

  const traverseFileTree = (item, path) => {
    return new Promise(resolve => {
      path = path || ""
      if (item.isFile) {
        // Get file
        item.file(file => {
          if (file.type.substring(0, 5) == 'audio') {
            //newMusicPaths.push(file.path)
            console.log(file.path)
            resolve(file.path)
          }
        })
      } else if (item.isDirectory) {
        // Get folder contents
        const dirReader = item.createReader()
        dirReader.readEntries(function (entries) {
          for (var i = 0; i < entries.length; i++) {
            traverseFileTree(entries[i], path + item.name + "/")
          }
        })
      }
    })
  }
  
  // const traverseFileTree = (item, path) => {
  //   path = path || ""
  //   if (item.isFile) {
  //     // Get file
  //     item.file(file => {
  //       if (file.type.substring(0, 5) == 'audio') {
  //         newMusicPaths.push(file.path)
  //       }
  //     })
  //   } else if (item.isDirectory) {
  //     // Get folder contents
  //     const dirReader = item.createReader()
  //     dirReader.readEntries(function (entries) {
  //       for (var i = 0; i < entries.length; i++) {
  //         traverseFileTree(entries[i], path + item.name + "/")
  //       }
  //     })
  //   }
  // }
}