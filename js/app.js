const ElectronStore = require('electron-store')
const store = new ElectronStore()


const tabs = document.querySelectorAll('header li.tab')
const firstStart = document.querySelector('.first-start')

import displayContent from './helpers/displayContent.js'
import switchTab from './helpers/switchTab.js'
import '../sass/style.sass'

if (!store.get('library')) {
  // Manage first start
  firstStart.classList.add('active')
} else {
  // Populate app with music library
  displayContent()
}

// Switch tab on tab click
for (const tab of tabs) {
  tab.addEventListener('click', () => {
    switchTab(tab.getAttribute('id'))
  })
}
