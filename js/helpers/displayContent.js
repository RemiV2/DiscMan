import createCard from './createCard.js'
// Display content depending on the active tab
export default () => {
  // Get sections from DOM
  const titlesSection = document.querySelector('.content[data-section="titles"]')
  const albumsSection = document.querySelector('.content[data-section="albums"]')
  const artistsSection = document.querySelector('.content[data-section="artists"]')

  // Create fake card
  // TODO: replace with real metadata
  const cardInfo = {
    title: 'Unknown Title',
    details: 'Unknown Source',
    src: '#',
    cover: 'unknown.png'
  }

  // Display titles
  for (let i = 0; i < 20; i++) {
    const card = createCard()
    titlesSection.appendChild(card)
  }
  
  // Display albums
  for (let i = 0; i < 20; i++) {
    const card = createCard()
    albumsSection.appendChild(card)
  }

  // Display artists
  for (let i = 0; i < 20; i++) {
    const card = createCard()
    artistsSection.appendChild(card)
  }
}