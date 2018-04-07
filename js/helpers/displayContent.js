const ElectronStore = require('electron-store')
const store = new ElectronStore()

import createSongCard from './createSongCard.js'
import createAlbumCard from './createAlbumCard.js'
import createArtistCard from './createArtistCard.js'

export default () => {
  return new Promise(resolve => {
    // Get library from storage
    const library = store.get('library')

    // Get sections from DOM
    const firstStart = document.querySelector('.first-start')
    const titlesSection = document.querySelector('.content[data-section="titles"]')
    const albumsSection = document.querySelector('.content[data-section="albums"]')
    const artistsSection = document.querySelector('.content[data-section="artists"]')

    // Hide first start screen
    firstStart.classList.remove('active')
    // Display titles
    titlesSection.innerHTML = ''
    for (const title of library.titles) {
      const card = createSongCard(title)
      titlesSection.appendChild(card)
    }
    
    // Display albums
    albumsSection.innerHTML = ''
    for (const album of library.albums) {
      const card = createAlbumCard(album)
      albumsSection.appendChild(card)
    }
    
    // Display artists
    artistsSection.innerHTML = ''
    for (const artist of library.artists) {
      const card = createArtistCard(artist)
      artistsSection.appendChild(card)
      if (artist === library.artists[library.artists.length -1]) {
        // Rendering is done
        resolve()
      }
    }

  })
}