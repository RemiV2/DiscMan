// const ElectronStore = require('electron-store')
// const store = new ElectronStore()

import createSongCard from './components/createSongCard.js'
import displayContent from './helpers/displayContent.js'
// import switchTab from './helpers/switchTab.js'
import '../sass/style.sass'

// Get active tab
let content = document.querySelector('.content.active')
let currentTabName = content.getAttribute('id')

displayContent = () => {
  let content = document.querySelector('.content.active')
  let currentTab = content.getAttribute('id')

  switch (currentTabName) {
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

switchTab = newTab => {
  // Only trigger if clicked tab isn't active
  if (!document.querySelector(`li.tab.active.${newTab}`)) {
    console.log('is new')
  }
  const tabs = document.querySelectorAll('tab')
  tabs.forEach(tab => {
    // Remove tab focus
    if (!tab.classList.contains('newTab')) {
      tab.classList.remove('active')
    } else {
      // Focus new tab
      tab.classList.add('active')
    }
  })
  // Update content
  displayContent()
}

const displayTitles = () => {
  console.log('display titles')
}

const displayArtists = () => {
  console.log('display artists')
}

const displayAlbums = () => {
  console.log('display albums')
}

const tabs = document.querySelectorAll('header li.tab')
console.log(tabs)
for (const tab of tabs) {
  tab.addEventListener('click', () => {
    switchTab(tab.getAttribute('id'))
  })
}

// for (let i = 0; i < 3; i++) {
//   const card = createSongCard()
//   content.appendChild(card)
// }