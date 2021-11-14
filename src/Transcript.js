import { Button, Form, FormGroup, FormControl} from "react-bootstrap";
import React from 'react';

class Transcript extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            taskValue: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updatedTaskList(this.state.taskValue);

        this.setState({
            taskValue: ''
        })
    }

    handleChange = (event) => {
        this.setState({
            taskValue: event.target.value
        })
    }

    removeCompletedTasks = () => {
        this.props.handleCompletedTasks();  
    }

    render() {
        const formInstance = (
            <Form inline onSubmit={this.handleSubmit}>
                <FormGroup controlId="formInlineName">
                    <textarea class="form-control" placeholder="Transcript starts here" rows="8" value={this.state.taskValue} onChange={this.handleChange} />
                </FormGroup>
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