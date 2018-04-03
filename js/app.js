const ElectronStore = require('electron-store')
const store = new ElectronStore()

const tabs = document.querySelectorAll('header li.tab')

import displayContent from './helpers/displayContent.js'
import switchTab from './helpers/switchTab.js'
import '../sass/style.sass'

// Populate app with music library
displayContent()

// Switch tab on tab click
for (const tab of tabs) {
  tab.addEventListener('click', () => {
    switchTab(tab.getAttribute('id'))
  })
}
