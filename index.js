async function* recordSnippet() {
    console.log('starting snippet recording')
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    const mediaRecorder = new MediaRecorder(stream)

    mediaRecorder.ondataavailable = event => {
        if (event.data.size > 0) {
            const audioElm = document.getElementById('snippetPlayer')
            const audioBlob = new Blob(event.data, { 'type' : 'audio/ogg; codecs=opus' })
            const url = URL.createObjectURL(audioBlob)
            audioElm.src = url
        }
    }
    
    yield mediaRecorder.start()
    
    console.log('starting snippet recording')
    mediaRecorder.stop()
}