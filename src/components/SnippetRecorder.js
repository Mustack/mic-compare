import React, { Component } from 'react';
import forEachAsync from 'async-await-foreach'
import MicCreator from './MicCreator'
import MicControls from './MicControls'

function playUntilEnd(audioElm) {
    return new Promise(resolve => {
        audioElm.addEventListener('ended', resolve)

        audioElm.play()
    })
}

class SnippetRecorder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mics: [],
            isPlayingAll: false
        }

        this.onMicCreated = micName => {
            this.setState({
                mics: [...this.state.mics, {name: micName, audioRef: React.createRef()}]
            })
        }

        this.playAll = async () => {
            this.setState({isPlayingAll: true})

            await forEachAsync(this.state.mics, mic => playUntilEnd(mic.audioRef.current.audioRef.current))

            this.setState({isPlayingAll: false})
        }
    }

    async componentDidMount() {
        const allDevices = await navigator.mediaDevices.enumerateDevices()
        const audioInputDevices = allDevices.filter(device => device.kind === 'audioinput')
        console.log('Audio input devices:', audioInputDevices)
        this.setState({audioInputDevices})
    }
    
    render() {
        return (
            <div>
                <MicCreator onMicCreated={this.onMicCreated}/>
                <button onClick={this.playAll}>Play All</button>
                { this.state.mics.map((mic, index) =>
                    <MicControls name={mic.name} key={index} ref={mic.audioRef} audioInputDevices={this.state.audioInputDevices} />
                  )
                } 
            </div>
        )
    }
}

export default SnippetRecorder