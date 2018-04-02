// const ElectronStore = require('electron-store')
// const store = new ElectronStore()

import createSongCard from './components/createSongCard.js'
import switchTab from './helpers/switchTab.js'
import '../sass/style.sass'

let content = document.querySelector('.content.active')
let currentTab = content.getAttribute('id')
console.log(currentTab)

displayContent = () => {
  switch (currentTab) {
    case 'titles':
      displayTitles()
      break;
  
    case 'artists':
      displayArtists()
      break;
  
    default:
      displayAlbums()
      break;
  }
}

for (let i = 0; i < 3; i++) {
  const card = createSongCard()
  content.appendChild(card)
}