async function recordSnippet() {
    console.log('starting snippet recording')
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    const mediaRecorder = new MediaRecorder(stream)

    
    
    mediaRecorder.start()

    function stop() {
        console.log('stopping snippet recording')
        return new Promise(resolve => {
            mediaRecorder.ondataavailable = event => {
                if (event.data.size > 0) {
                    const audioBlob = new Blob([event.data], { 'type' : 'audio/ogg; codecs=opus' })
                    const url = URL.createObjectURL(audioBlob)
                    stream.getTracks().map(track => track.stop())
                    resolve(url)
                }
            }
    
            mediaRecorder.stop()
        })
    }

    return stop
}

export default recordSnippet