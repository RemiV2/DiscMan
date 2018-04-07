let songCards

const playSong = audio => {
  console.log(audio)
  const playPromise = audio.play()
  playPromise
    .then(() => {
      console.log('playing')
    })
    .catch(error => {
      console.warn(error)
    })
}

export default () => {
  songCards = document.querySelectorAll('.card.song')

  for (const songCard of songCards) {
    songCard.addEventListener('click', () => {
      if (!songCard.classList.contains('is-playing')) {
        console.log('trigger')
        const audio = songCard.querySelector('audio')
        const currentlyPlaying = document.querySelector('.is-playing')
        if (currentlyPlaying) {
          currentlyPlaying.classList.remove('is-playing')
          currentlyPlaying.querySelector('audio').pause()
        }
        
        songCard.classList.add('is-playing')
        // Prevent Chrome's play/pause conflict
        window.setTimeout(() => {
          playSong(audio)
        }, 100)
      }
    })
  }
}