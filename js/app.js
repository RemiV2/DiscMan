const ElectronStore = require('electron-store')
const store = new ElectronStore()

const tabs = document.querySelectorAll('header li.tab')

import displayContent from './helpers/displayContent.js'
import switchTab from './helpers/switchTab.js'
import '../sass/style.sass'

// Switch tab on tab click
for (const tab of tabs) {
  console.log(tab)
  tab.addEventListener('click', () => {
    switchTab(tab.getAttribute('id'))
  })
}

// Populate app with music library
displayContent()