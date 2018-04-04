const mm = require('music-metadata')
const ElectronStore = require('electron-store')
const store = new ElectronStore()

import displayContent from './displayContent.js'

// Get current library or create new one
const library = store.get('library') || {titles: [], albums: [], artists: []}

// Render songs again everytime the library changes
store.onDidChange('library', displayContent)

export default {
  add: async fileList => {
    for (const file of fileList) {
      const metadata = await mm.parseFile(file, {native: true})
      const fileData = {
        file,
        title: metadata.common.title,
        album: metadata.common.album,
        artist: metadata.common.artist,
        picture: metadata.common.picture,
        track: metadata.common.track
      }
      library.titles.push(fileData)
    }
    store.set('library', library)
  }
}