import { Button, Form, FormGroup, FormControl} from "react-bootstrap";
import React from 'react';
import Invite from "./Invite";

class Transcript extends React.Component {

    constructor(props) {
        super(props)

        // You may want to think of adding a way to start transcribing once the site is connected to a call

        this.state = {
            transcript_value: "",
            zoom_call: <Invite/>
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updatedTaskList(this.state.taskValue);

        this.setState({
            transcript_value: ""
        })
    }

    handleChange = (event) => {
        this.setState({
            transcript_value: ""
        })
    }

	render() {
        const formInstance = (
            <Form inline onSubmit={this.handleSubmit}>
                <div class="form-group" controlId="formInlineName">
                    <Form textarea type="text" placeholder="Transcript starts here" rows={8} value={this.state.zoomlink} onChange={this.handleZoomChange} />
                </div>
			</Form>
        );

        return (
            <div className="taskInputs">
                {formInstance}
            </div>
        );
    }

}

export default Transcript;