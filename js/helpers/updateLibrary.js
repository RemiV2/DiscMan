const mm = require('music-metadata')
const ElectronStore = require('electron-store')
const store = new ElectronStore()

import displayContent from './displayContent.js'

// Get current library or create new one
const library = store.get('library') || {titles: [], albums: [], artists: []}

// Render songs again everytime the library changes
// store.onDidChange('library', () => {
//   console.log('update')
//   displayContent()
// })

export default {
  add: async fileList => {
    for (const file of fileList) {
      const metadata = await mm.parseFile(file, {native: true})

      // Get cover art if it's available
      let picture = ''
      if (metadata.common.picture) {
        picture = metadata.common.picture[0]
        // Convert picture to base64
        picture = URL.createObjectURL(
          new Blob([picture.data], { 'type': 'image/' + picture.format })
        )
      }

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

    // Sort alphabetically by song name
    library.titles = library.titles.sort((a, b) => {
      const titleA = a.title.toUpperCase()
      const titleB = b.title.toUpperCase()
      return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0
    })

    // Find and remove duplicates by file path
    const removeDuplicates = (myArr, prop) => {
      return myArr.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
      })
    }
    const uniqueTitles = removeDuplicates(library.titles, 'file')

    if (uniqueTitles.length !== library.titles.length) {
      library.titles = uniqueTitles
      store.set('library', library)
      displayContent()
    } else {
      store.set('library.titles', library.titles)
      displayContent()
    }

  }
}