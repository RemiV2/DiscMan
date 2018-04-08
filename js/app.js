const ElectronStore = require('electron-store')
const store = new ElectronStore()

const currentWindow = require('electron').remote.getCurrentWindow()

// TODO: remove clear
// store.clear()

const tabs = document.querySelectorAll('header li.tab')
const firstStart = document.querySelector('.first-start')

import displayContent from './helpers/displayContent.js'
import switchTab from './helpers/switchTab.js'
import handleDragAndDrop from './helpers/handleDragAndDrop.js'
import handleMedia from './helpers/handleMedia.js'
import '../sass/style.sass'

if (!store.get('library')) {
  // Manage first start
  firstStart.classList.add('active')
  // Only show app when it's loaded
  currentWindow.show()
  currentWindow.focus()
} else {
  // Populate app with music library
  displayContent().then(() => {
    // Only show app when it's loaded
    currentWindow.show()
    currentWindow.focus()

    // Listen to events on cards
    handleMedia()
  })
}

// Listen for drags to update library
handleDragAndDrop()

// Switch tab on tab click
for (const tab of tabs) {
  tab.addEventListener('click', () => {
    switchTab(tab.getAttribute('id'))
  })
}
