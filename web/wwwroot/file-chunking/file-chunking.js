

const chunkSize = 128 * 1024 // bytes


function chunkFile (file, callback) {
  file.arrayBuffer().then(buffer => {
    const total = buffer.byteLength
    let remaining = total
    while (remaining > 0) {
      const offset = total - remaining
      const length = Math.min(total - offset, chunkSize)
      const chunk = new Int8Array(buffer, offset, length)
      callback(chunk)
      remaining -= chunk.byteLength
    }
  })
}

function getFiles () {
  return document.getElementById('file-input').files
}


document.getElementById("chunk-button").addEventListener('click', (e) => {
  chunkFile(getFiles()[0], (chunk) => {
    console.log(chunk)
  })
})