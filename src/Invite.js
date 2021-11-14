import { Button, Form, FormGroup, FormControl } from "react-bootstrap";
import React from 'react';

class Invite extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            zoomlink: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        // TODO: 
        // Send this.state.zoomlink and this.state.password to Flask to connect to Zoom call
        // Depending on response either sends toast saying it's connected or not.

        this.setState({
            zoomlink: "",
            password: ""
        })
    }

    handleZoomChange = (event) => {
        this.setState({
            zoomlink: event.target.value
        })
    }

    handlePassChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    render() {
        const formInstance = (
            <Form inline onSubmit={this.handleSubmit}>
                <div class="form-group" controlId="formInlineName">
                    <FormControl type="text" placeholder="Paste invite link here" value={this.state.zoomlink} onChange={this.handleZoomChange} />
                </div>
                <div class="form-group" controlId="formInlineName">
                    <FormControl type="text" placeholder="Enter password here" value={this.state.password} onChange={this.handlePassChange} />
                </div>
				{' '}
                <Button bsStyle="primary" type="submit">Go</Button>
            </Form>
        );

        return (
            <div className="taskInputs">
                {formInstance}
            </div>
        );
    }

}

export default Invite;