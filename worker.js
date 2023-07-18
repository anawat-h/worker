self.onconnect = function (event) {
  const port = event.ports[0]
  let counter = 0
  port.addEventListener('message', () => {
    counter++
    port.postMessage(counter)
  })
  port.start()
}
