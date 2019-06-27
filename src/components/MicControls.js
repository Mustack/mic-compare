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
                const stopRecording = await recordSnippet(this.state.selectedDevice)
                this.setState({stopRecording, canRecord: true})
            } else {
                this.setState({isRecording: false, canRecord: false})
                
                try {
                    const audioUrl = await this.state.stopRecording()
                    this.audioRef.current.src = audioUrl
                    this.audioRef.current.load()
                } catch (e) {
                    console.log(e)
                }

                this.setState({canRecord: true})
            }
        }

        this.handleDeviceChange = event => {
            this.setState({selectedDevice: event.target.value})
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <div>
                    <label>
                        Microphone:
                        <select value={this.state.selectedDevice} onChange={this.handleDeviceChange}>
                            {
                                this.props.audioInputDevices.map(device => 
                                    <option value={device.deviceId} key={device.deviceId}>{device.label}</option>
                                )
                            }
                        </select>
                    </label>
                </div>
                
                <button onClick={this.toggleRecording} disabled={!this.state.canRecord}>
                    {this.state.isRecording ? 'Stop Recording' : 'Start Recording'}
                </button>
                <audio src="" controls ref={this.audioRef}></audio>
            </div>
        )
    }
}

MicControls.defaultProps = {
    audioInputDevices: []
}

export default MicControls