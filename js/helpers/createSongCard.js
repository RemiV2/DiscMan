export default songData => {
  // Create a card for the song
  const songCard = document.createElement('div')
  songCard.classList.add('card', 'song')

  // Populate card with song data
  songCard.innerHTML = `
    <div class="card__art" ${songData.picture ? ('style="background: url(' + songData.picture + ') top left / cover"') : '' }></div>
    <div class="card__info">
      <audio class="card__source" src="${songData.file}"></audio>
      <p class="card__title">${songData.title}</p>
      <p class="card__details">${songData.artist}</p>
    </div>
  `
  
  return songCard
}