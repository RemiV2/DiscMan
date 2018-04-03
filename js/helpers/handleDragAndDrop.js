const fs = require('fs')
const mime = require('mime-types')

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
    const rootFiles = e.dataTransfer.files
    for (const rootFile of rootFiles) {
      newMusicPaths = crawlDirectory(rootFile.path, newMusicPaths)
    }
    console.table(newMusicPaths)
    console.log('should be last')
  })

  const crawlDirectory = (directory, fileList) => {
    directory += '/'
    const files = fs.readdirSync(directory)
    fileList = fileList || []

    // Parse directory content
    files.forEach(function (file) {
      if (fs.statSync(directory + file).isDirectory()) {
        fileList = crawlDirectory(directory + file + '/', fileList)
      }
      else {
        // Only save if it's a supported audio file
        const type = mime.lookup(file).toString()
        if (type.substring(0, 5) === 'audio' && !type.includes('x-mpegurl')) {
          fileList.push(file)
          console.log(type)
        }
      }
    })
    return fileList;
  }
}