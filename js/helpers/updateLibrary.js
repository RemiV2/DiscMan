const mm = require('music-metadata')
const ElectronStore = require('electron-store')
const store = new ElectronStore()

// Get current library or create new one
const library = store.get('library') || []

export default {
  add: async fileList => {
    for (const file of fileList) {
      const metadata = await mm.parseFile(file, {native: true})
      const fileData = {
        title: metadata.common.title,
        album: metadata.common.album,
        artist: metadata.common.artist,
        picture: metadata.common.picture,
        track: metadata.common.track
      }
      library.push(fileData)
    }
  }
}