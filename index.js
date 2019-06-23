async function* recordSnippet() {
    let snippetBuffer = []

    console.log('starting snippet recording')
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    const mediaRecorder = new MediaRecorder(stream)

    mediaRecorder.ondataavailable = event => {
        if (event.data.size > 0) {
            snippetBuffer.push(event.data)

            const audioElm = document.getElementById('snippetPlayer')
            const audioBlob = new Blob(snippetBuffer, { 'type' : 'audio/ogg; codecs=opus' })
            const url = URL.createObjectURL(audioBlob)
            audioElm.src = url
        }
    }
    
    yield mediaRecorder.start()
    
    console.log('stopping snippet recording')
    mediaRecorder.stop()
}