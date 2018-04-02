const ElectronStore = require('electron-store')
const store = new ElectronStore()

const tabs = document.querySelectorAll('header li.tab')
const titlesSection = document.querySelector('.content#titles')
const albumsSection = document.querySelector('.content#albums')
const artistsSection = document.querySelector('.content#artists')

import createSongCard from './components/createSongCard.js'
import displayContent from './helpers/displayContent.js'
import switchTab from './helpers/switchTab.js'
import '../sass/style.sass'

// Switch tab on tab click
for (const tab of tabs) {
  console.log(tab)
  tab.addEventListener('click', () => {
    console.log('click')
    switchTab(tab.getAttribute('id'))
  })
}

// for (let i = 0; i < 3; i++) {
//   const card = createSongCard()
//   content.appendChild(card)
// }