export default albumData => {
  // Create a card for the song
  const albumCard = document.createElement('div')
  albumCard.classList.add('card', 'album')


  // Populate card with song data
  albumCard.innerHTML = `
    <div class="card__art" ${albumData.titles[0].picture ? ('style="background: url(' + albumData.titles[0].picture + ') top left / cover"') : ''}></div>
    <div class="card__info">
      <p class="card__title">${albumData.name}</p>
      <p class="card__details">${albumData.artist}</p>
    </div>
  `

  return albumCard
}