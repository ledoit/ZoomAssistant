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
        // How do we constantly get new data from the Twilio MediaStream?
        // while (this.state.zoom_call.state.meeting != ""){
            const trans = (
                <p class="text-break">
                    {this.state.transcript_value}
                </p>
            );
        // }

        return (
            <div className="transcript">
                {trans}
            </div>
        );
    }

}

export default Transcript;