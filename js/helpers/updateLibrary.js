const mm = require('music-metadata')
const ElectronStore = require('electron-store')
const store = new ElectronStore()

import displayContent from './displayContent.js'

// Get current library or create new one
const library = store.get('library') || {titles: [], albums: [], artists: []}

// Save pictures as base64
const convertTo64 = picture => {
  return new Promise(resolve => {
    const reader = new FileReader()
    reader.readAsDataURL(picture)
    reader.addEventListener('loadend', () => {
      resolve(reader.result)
      // console.log(render.result)
    })
  })
}

// Find and remove duplicates by file path
const removeDuplicates = (myArr, prop) => {
  return myArr.filter((obj, pos, arr) => {
    return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
  })
}

export default {
  add: async fileList => {
    for (const file of fileList) {
      const metadata = await mm.parseFile(file, {native: true})

      // Get cover art if it's available
      let picture = ''
      if (metadata.common.picture) {
        picture = metadata.common.picture[0]
        // Convert picture to Blob
        picture = new Blob([picture.data], { 'type': 'image/' + picture.format })
        // Convert Blob to base64 for better persistence
        picture = await convertTo64(picture)
      }

      const fileData = {
        file,
        title: metadata.common.title,
        album: metadata.common.album,
        artist: metadata.common.artist,
        picture,
        track: metadata.common.track
      }
      

      // Add to library
      library.titles.push(fileData)
    }

    // Sort alphabetically by song name
    library.titles = library.titles.sort((a, b) => {
      const titleA = a.title.toUpperCase()
      const titleB = b.title.toUpperCase()
      return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0
    })

    const uniqueTitles = removeDuplicates(library.titles, 'file')

    if (uniqueTitles.length !== library.titles.length) {
      // Only update library if there were duplicates
      library.titles = uniqueTitles
    }
    
    // Group by albums
    library.albums = []
    for (const titleObject of library.titles) {
      // Check if album is new
      let newAlbum = true 
      for (const album of library.albums) {
        if (album.name === titleObject.album) {
          newAlbum = false
          // Add title to album
          album.titles.push(titleObject)
        }
      }

      // Create new album object
      if (newAlbum) {
        library.albums.push({
          name: titleObject.album,
          artist: titleObject.artist,
          titles: [titleObject]
        })
      }
    }

    // Sort albums alphabetically
    library.albums = library.albums.sort((a, b) => {
      const albumA = a.name.toUpperCase()
      const albumB = b.name.toUpperCase()
      return (albumA < albumB) ? -1 : (albumA > albumB) ? 1 : 0
    })

    // Delete duplicate albums 
    console.log(library.albums)
    // const uniqueAlbums = removeDuplicates(library.albums, name)
    // if (uniqueAlbums.length !== library.albums.length) {
    //   // Only update library if there were duplicates
    //   console.log('duplicate')
    //   library.albums = uniqueAlbums
    // }

    // Group by artists
    library.artists = []
    for (const albumObject of library.albums) {
      // Check if artist is new
      let newArtist = true
      for (const artist of library.artists) {
        if (artist.name === albumObject.artist) {
          newArtist = false
          // Add album to artist
          artist.albums.push(albumObject)
        }
      }

      // Create new artist object
      if (newArtist) {
        library.artists.push({
          name: albumObject.artist,
          albums: [albumObject]
        })
      }
    }

    // Sort artists alphabetically
    library.artists = library.artists.sort((a, b) => {
      const artistA = a.name.toUpperCase()
      const artistB = b.name.toUpperCase()
      return (artistA < artistB) ? -1 : (artistA > artistB) ? 1 : 0
    })
    
    // Save changes
    store.set('library', library)

    // Update UI to display changes
    displayContent()
  }
}