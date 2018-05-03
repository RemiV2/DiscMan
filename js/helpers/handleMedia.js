let songCards
const player = document.querySelector('.player')
const playerSource = player.querySelector('audio')
const sections = document.querySelectorAll('.content')
const timeBar = document.querySelector('.time-control')
const volumeBar = document.querySelector('.vol-control')

const icons = {
  previous: player.querySelector('.media-controls .previous'),
  playPause: player.querySelector('.media-controls .play-pause'),
  next: player.querySelector('.media-controls .next'),
  volume: player.querySelector('.volume .icon')
}

const playSong = (audio, songCard) => {
  // Start song playback
  playerSource.src = audio.src
  playerSource.currentTime = 0
  timeBar.value = 0
  playerSource.play()
    .then(() => {
      console.log('playing')
      // Display song info on player
      updatePlayer(songCard)
      icons.playPause.classList.add('playing')
      icons.playPause.classList.remove('paused')

      // Play on pause audio on icon click
      icons.playPause.addEventListener('click', () => {
        if (icons.playPause.classList.contains('playing')) {
          playerSource.pause()
          icons.playPause.classList.remove('playing')
          icons.playPause.classList.add('paused')
        } else {
          playerSource.play()
          icons.playPause.classList.add('playing')
          icons.playPause.classList.remove('paused')
        }
      })
    })
    .catch(error => {
      // Try again
      window.setTimeout(() => {
        console.log('try again')
        playSong(audio, songCard).catch(error => {
          console.error('Could not play, ', error)
        })
      }, 300)
    })
}

const updatePlayer = songCard => {
  // Display song info on player
  player.querySelector('.data .title').innerHTML = songCard.querySelector('.card__title').innerHTML
  player.querySelector('.data .artist').innerHTML = songCard.querySelector('.card__details').innerHTML
  player.querySelector('.art').style.background = songCard.querySelector('.card__art').style.background

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
        }
        
        songCard.classList.add('is-playing')
        window.setTimeout(() => {
          playSong(audio, songCard)
        }, 100)
      }
    })
  }

  // Adjust volume
  volumeBar.addEventListener('input', function() {
    playerSource.volume = this.value
  })

  // Adjust time position
  timeBar.addEventListener('input', function() {
    playerSource.currentTime = this.value * playerSource.duration
  })
}