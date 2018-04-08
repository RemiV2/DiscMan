let songCards
const player = document.querySelector('.player')
const sections = document.querySelectorAll('.content')

const icons = {
  previous: player.querySelector('.media-controls .previous'),
  playPause: player.querySelector('.media-controls .play-pause'),
  next: player.querySelector('.media-controls .next'),
  volume: player.querySelector('.volume .icon')
}

const playSong = audio => {
  // Start song playback
  return audio.play()
}

const updatePlayer = songCard => {
  // Display song info on player
  player.querySelector('.data .title').innerHTML = songCard.querySelector('.card__title').innerHTML
  player.querySelector('.data .artist').innerHTML = songCard.querySelector('.card__details').innerHTML
  //player.querySelector('.art').style.background = songCard.querySelector('.art').style.background
  //console.log(songCard.querySelector('.art').style.background)
  player.querySelector('.art').style.background = songCard.querySelector('.card__art').style.background
  console.log(songCard)

  // Make player visible
  player.classList.add('active')
  for (const section of sections) {
    section.classList.add('player-on')
  }
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
          currentlyPlaying.querySelector('audio').currentTime = 0
          currentlyPlaying.querySelector('audio').pause()
        }
        
        songCard.classList.add('is-playing')
        window.setTimeout(() => {
          playSong(audio)
            .then(() => {
              // Playback was successful
              console.log('enjoy')
              // Display song info on player
              updatePlayer(songCard)
            })
            .catch(error => {
              // Try again
              window.setTimeout(() => {
                console.log('try again')
                playSong(audio).catch(error => {
                  console.error('Could not play, ', error)
                })
              }, 300)
            })
        }, 100)
      }
    })
  }
}