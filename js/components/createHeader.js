export default activeTab => {
  // Set albums as default tab if none if specified
  if (activeTab !== ('titles' || 'albums' || 'artists' || 'firstStart')) {
    activeTab = 'albums'
  }

  // Create an empty header
  const header = document.createElement('header')
  
  // Populate header with tabs
  header.innerHTML = `
    <p id="appTitle">DiscMan</p>
    <ul class="nav nav-pills centeredPills">
      <li onmousedown="return false" class="${activeTab === 'titles' ? 'active' : ''}">
        <a href="./titles.html" class="titlesTab">Titles</a>
      </li>
      <li onmousedown="return false" class="${activeTab === 'albums' ? 'active' : ''}">
        <a href="#" class="albumsTab">Albums</a>
      </li>
      <li onmousedown="return false" class="${activeTab === 'artists' ? 'active' : ''}">
        <a href="./artists.html" class="artistsTab">Artists</a>
      </li>
    </ul>
  `

  console.log('header created')
  return header
}