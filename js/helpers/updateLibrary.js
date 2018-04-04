const mm = require('music-metadata')
const ElectronStore = require('electron-store')
const store = new ElectronStore()

import displayContent from './displayContent.js'

// Get current library or create new one
const library = store.get('library') || {titles: [], albums: [], artists: []}

// Render songs again everytime the library changes
//store.onDidChange('library', displayContent)

export default {
  add: async fileList => {
    for (const file of fileList) {
      const metadata = await mm.parseFile(file, {native: true})

      // Convert picture to base64
      let picture = metadata.common.picture[0]
      picture = URL.createObjectURL(
        new Blob([picture.data], { 'type': 'image/' + picture.format })
      )

      const fileData = {
        file,
        title: metadata.common.title,
        album: metadata.common.album,
        artist: metadata.common.artist,
        picture,
        track: metadata.common.track
      }

      // Add to library
      library.titles.push(fileData)
    }

    // Find and remove duplicates by file path
    const removeDuplicates = (myArr, prop) => {
      return myArr.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
      })
    }
    library.titles = removeDuplicates(library.titles, 'file')
    store.set('library', library)
    displayContent()
  }
}