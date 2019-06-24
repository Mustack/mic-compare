import React, { Component } from 'react';

class MicCreator extends Component {
    constructor(props) {
        super(props)
        this.state = {micName: ''}

        this.handleChange = event => {
            this.setState({micName: event.target.value})
        }

        this.handleSubmit = event => {
            event.preventDefault();
            props.onMicCreated({name: this.state.micName})
            this.setState({micName: ''})
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Mic Name:
                    <input type="text" placeholder="Bluetooth Headset" value={this.state.micName} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Create"/>
            </form>
        )
    }
}

export default MicCreator