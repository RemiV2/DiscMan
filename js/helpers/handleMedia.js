let songCards, failCount
const player = document.querySelector('.player')

const playSong = audio => {
  console.log(audio)
  return audio.play()
}

const updatePlayer = songCard => {
  player.classList.add('active')
  player.querySelector('.data .title').innerHTML = songCard.querySelector('.card__title').innerHTML
  player.querySelector('.data .artist').innerHTML = songCard.querySelector('.card__details').innerHTML
  player.querySelector('.art').style.background = songCard.querySelector('.art').style.background
}

export default () => {
  songCards = document.querySelectorAll('.card.song')

  for (const songCard of songCards) {
    songCard.addEventListener('click', () => {
      // Only play if song is already playing
      if (!songCard.classList.contains('is-playing')) {
        const audio = songCard.querySelector('audio')
        const currentlyPlaying = document.querySelector('.is-playing')
        if (currentlyPlaying) {
          // End current playback
          currentlyPlaying.classList.remove('is-playing')
          currentlyPlaying.querySelector('audio').position 0
          currentlyPlaying.querySelector('audio').pause()
        }
        
        songCard.classList.add('is-playing')
        failCount = 0
        playSong(audio)
          .then(() => {
            // Playback was successful
            console.log('enjoy')
            // Display song info on player
            updatePlayer(songCard)
          })
          .catch(error => {
            failCount++
            if (failCount < 3) {
              // Try 2 more times
              window.setTimeout(() => {
                console.log('try again')
                playSong(audio)
              }, 300)
            } else {
              console.log('Could not play')
            }
          })
      }
    })
  }
}