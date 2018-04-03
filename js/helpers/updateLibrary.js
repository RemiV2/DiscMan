const mm = require('music-metadata')
const ElectronStore = require('electron-store')
const store = new ElectronStore()

// Get current library or create new one
const library = store.get('library') || []

export default {
  add: fileList => {
    for (const file of fileList) {
      mm.parseFile(file, {native: true})
        .then(metadata => {
          const fileData = {
            title: metadata.common.title,
            album: metadata.common.album,
            artist: metadata.common.artist,
            picture: metadata.common.picture,
            track: metadata.common.track
          }
          //fileData.title = metadata.title
          library.push(fileData)
          console.log('f')
        })
    }
    console.log('last')
  }
}