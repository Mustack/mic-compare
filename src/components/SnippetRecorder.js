import React, { Component } from 'react';
import MicCreator from './MicCreator'
import MicControls from './MicControls'

class SnippetRecorder extends Component {
    constructor(props) {
        super(props)
        this.state = {mics: []}

        this.onMicCreated = mic => {
            this.setState({mics: [...this.state.mics, mic]})
        }
    }
    
    render() {
        return (
            <div>
                <MicCreator onMicCreated={this.onMicCreated}/>
                { this.state.mics.map((mic, index) => <MicControls name={mic.name} key={index} />) } 
            </div>
        )
    }
}

export default SnippetRecorder