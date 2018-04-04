export default songData => {
  // Create a card for the song
  const songCard = document.createElement('div')
  songCard.classList.add('card')

  // Populate card with song data
  songCard.innerHTML = `
    <div class="card__art"></div>
    <div class="card__info">
      <audio class="card__source" src="${songData.file}"></audio>
      <p class="card__title">${songData.title}</p>
      <p class="card__details">${songData.artist}</p>
    </div>
    `
  
  return songCard
}