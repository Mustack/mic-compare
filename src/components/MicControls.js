import React, { Component } from 'react';

class MicControls extends Component {
    constructor(props) {
        super(props)
        this.state = {isRecording: false}

        this.toggleRecording = () => {
            if (!this.state.isRecording) {
                this.setState({isRecording: true})
            } else {
                this.setState({isRecording: false})
            }
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <button onClick={this.toggleRecording}>{this.state.isRecording ? 'Stop Recording' : 'Start Recording'}</button>
            </div>
        )
    }
}

export default MicControls