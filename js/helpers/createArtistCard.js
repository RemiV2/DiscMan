export default artistData => {
  // Create a card for the song
  const artistCard = document.createElement('div')
  artistCard.classList.add('card', 'artist')


  // Populate card with song data
  artistCard.innerHTML = `
    <div class="card__art" ${artistData.albums[0].titles[0].picture ? ('style="background: url(' + artistData.albums[0].titles[0].picture + ') top left / cover"') : ''}></div>
    <div class="card__info">
      <p class="card__title">${artistData.name}</p>
      <p class="card__details">${artistData.albums.length} album${artistData.albums.length > 1 ? 's' : ''}</p>
    </div>
  `

  return artistCard
}