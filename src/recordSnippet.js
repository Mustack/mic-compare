import { rejects } from "assert";

async function recordSnippet(deviceId) {
    console.log('starting snippet recording')
    console.log('Using device: ', deviceId)
    const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
            deviceId: { exact: deviceId }
        }
    })
    const mediaRecorder = new MediaRecorder(stream)
    
    mediaRecorder.start()

    function stop() {
        console.log('stopping snippet recording')
        return new Promise((resolve, reject) => {
            mediaRecorder.ondataavailable = event => {
                try {
                    if (event.data.size > 0) {
                        const audioBlob = new Blob([event.data], { 'type' : 'audio/ogg; codecs=opus' })
                        const url = URL.createObjectURL(audioBlob)
                        stream.getTracks().map(track => track.stop())
                        resolve(url)
                    } else {
                        reject('audio data was empty')
                    }
                } catch (e) {
                    reject('Failed get URL for audio snippet', e)
                }
            }
    
            mediaRecorder.stop()
        })
    }

    return stop
}

export default recordSnippet