const metaData = require('music-metadata')

export default filePaths => {
  const results = []
  for (const path of filePaths) {
    // Get meta data
    metaData
      .parseFile(path, {native: true})
      .then(metadata => {
        results.push(metaData)
      })
      .catch(err => {
        console.error(err.message);
      })
  }
  console.table(results)
}