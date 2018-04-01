// const ElectronStore = require('electron-store')
// const store = new ElectronStore()

import createSongCard from './components/createSongCard.js'
import createHeader from './components/createHeader.js'
import createPlayer from './components/createPlayer.js'
import '../sass/style.sass'

const content = document.querySelector('.content')
const currentTab = content.getAttribute('id')
console.log(currentTab)

const player = createPlayer()
document.body.appendChild(player)

const header = createHeader(currentTab)
document.body.appendChild(header)

// Populate content

for (let i = 0; i < 3; i++) {
  const card = createSongCard()
  content.appendChild(card)
}