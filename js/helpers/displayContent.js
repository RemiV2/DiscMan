const ElectronStore = require('electron-store')
const store = new ElectronStore()

import createSongCard from './createSongCard.js'


export default () => {
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
  // for (let i = 0; i < 20; i++) {
  //   const card = createCard()
  //   albumsSection.appendChild(card)
  // }

  // Display artists
  // for (let i = 0; i < 20; i++) {
  //   const card = createCard()
  //   artistsSection.appendChild(card)
  // }
}