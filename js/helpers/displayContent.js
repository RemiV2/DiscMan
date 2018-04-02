// Display content depending on the active tab
displayContent = () => {
  let content = document.querySelector('.content.active')
  let currentTab = content.getAttribute('id')

  switch (currentTabName) {
    case 'titles':
      displayTitles()
      break;

    case 'artists':
      displayArtists()
      break;

    default:
      displayAlbums()
      break;
  }
}