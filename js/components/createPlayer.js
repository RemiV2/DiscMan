export default track => {
  // Create placeholder data if none is available
  const media = track || {
    title: 'Unknown Title',
    details: 'Unknown Source',
    src: '#',
    cover: 'unknown.png'
  }

  // Create an empty player
  const player = document.createElement('footer')
  player.classList.add('player')

  // Populate player with song data
  player.innerHTML = `
    <input id="timeControl" type="range" min="0" max="1" step="0.01" value="0"></input>
    <audio></audio>
    <div class="art"></div>
    <div class="data">
      <p class="title">${media.title}</p>
      <p class="artist">${media.details}</p>
      <div class="mediaControls">
        <div class="previous"></div>
        <div class="playpause playing"></div>
        <div class="next"></div>
      </div>
    </div>
    <div class="volume">
      <input id="vol-control" type="range" min="0" max="1" step="0.01" value="1"></input>
      <div class="soundonoff"></div>
    </div>
  `

  console.log('player created')
  return player
}