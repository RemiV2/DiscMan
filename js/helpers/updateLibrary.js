const mm = require('music-metadata')
const ElectronStore = require('electron-store')
const store = new ElectronStore()

export default {
  add: fileList => {
    for (const file of fileList) {
      mm.parseFile(file, {native: true})
        .then(metadata => {
          const fileData = {}
          fileData.title = metadata.title
          console.log(fileData)
        })
    }
  }
}