let songCards

export default () => {
  songCards = document.querySelectorAll('.card.song')

  for (const songCard of songCards) {
    songCard.addEventListener('click', () => {
      const audio = songCard.querySelector('audio')
      console.log('play ' + audio.src)
    })
  }
}