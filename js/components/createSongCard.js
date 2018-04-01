export default songData => {
  // Create placeholder data if none is available
  const songInfo = songData || {
    title: 'Unknown Title',
    details: 'Unknown Source',
    src: '#',
    cover: 'unknown.png'
  }

  // Create a card for the song
  const songCard = document.createElement('div')
  songCard.classList.add('card')

  // Populate card with song data
  songCard.innerHTML = `
    <div class="card__art"></div>
    <div class="card__info">
      <audio class="card__source" src="${songInfo.src}"></audio>
      <p class="card__title">${songInfo.title}</p>
      <p class="card__details">${songInfo.details}</p>
    </div>
  `

  console.log('card created')
  return songCard
}