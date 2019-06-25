import React, { Component } from 'react';
import MicCreator from './MicCreator'
import MicControls from './MicControls'

class SnippetRecorder extends Component {
    constructor(props) {
        super(props)
        this.state = {mics: []}

        this.onMicCreated = micName => {
            this.setState({
                mics: [...this.state.mics, {name: micName, audioRef: React.createRef()}]
            })
        }

        this.playAll = () => {
            this.state.mics.forEach(mic => mic.audioRef.current.audioRef.current.play())
        }
    }
    
    render() {
        return (
            <div>
                <MicCreator onMicCreated={this.onMicCreated}/>
                <button onClick={this.playAll}>Play All</button>
                { this.state.mics.map((mic, index) =>
                    <MicControls name={mic.name} key={index} ref={mic.audioRef} />
                  )
                } 
            </div>
        )
    }
}

export default SnippetRecorder