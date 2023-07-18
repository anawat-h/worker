let counter = 0
self.addEventListener('message', () => {
  counter++
  postMessage(counter)
})
