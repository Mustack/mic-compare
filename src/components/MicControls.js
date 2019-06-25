import React, { Component } from 'react';
import recordSnippet from '../recordSnippet'

class MicControls extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isRecording: false,
            canRecord: true
        }

        this.audioRef = React.createRef()

        this.toggleRecording = async () => {
            if (!this.state.isRecording) {
                this.setState({isRecording: true, canRecord: false})
                const stopRecording = await recordSnippet()
                this.setState({stopRecording, canRecord: true})
            } else {
                this.setState({isRecording: false, canRecord: false})
                const audioUrl = await this.state.stopRecording()
                this.setState({isRecording: false, canRecord: true})
                this.audioRef.current.src = audioUrl
                this.audioRef.current.load()
            }
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <button onClick={this.toggleRecording} disabled={!this.state.canRecord}>
                    {this.state.isRecording ? 'Stop Recording' : 'Start Recording'}
                </button>
                <audio src="" controls ref={this.audioRef}></audio>
            </div>
        )
    }
}

export default MicControls