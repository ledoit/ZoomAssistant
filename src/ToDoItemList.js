import React from "react";
import Invite from "./Invite";
import AddTask from "./AddTask";
import ListItems from "./ListItems";
import Transcript from "./Transcript";
import './ToDoItemList.css';

class ToDoItemList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            taskList: [],
            progress: 0 
        }
    }

    updateTaskList = (taskValue) => {
        const prevTaskList = this.state.taskList.slice();
        const updatedTaskList = [...prevTaskList, ...[{ key: Date.now(), task: taskValue, completed: false }]];
        const computeUpdatedProgress = this.computeProgress(updatedTaskList);

        this.setState({
            progress: computeUpdatedProgress,
            taskList: updatedTaskList,
        })
    }

    computeProgress(taskList) {
        let completed = 0;
        taskList.forEach(task => {
            if(task.completed) {
                completed++;
            }
        });

        const progress = (completed / taskList.length).toFixed(2);
        return progress * 100;
    }

    handleTaskClick = (key) => {
        const prevTaskList = this.state.taskList.slice();
        const completedTasks = prevTaskList.map(task => {
            if(task.key === key) {
                task.completed = !task.completed;
            }
            return task;
        });
        
        const computeUpdatedProgress = this.computeProgress(completedTasks);

        this.setState({
            progress: computeUpdatedProgress,
            taskList: completedTasks,
        })
    }

    handleCompletedTasks = () => {
        const prevTaskList = this.state.taskList.slice();
        const unCompletedTasks = prevTaskList.filter(task => !task.completed);

        this.setState({
            taskList: unCompletedTasks,
            progress: 0
        })
    }

    render() {
        const jumbotronInstance = (
            <div class="container-fluid">
                <div class="row mt-n1">
                    <div class="col text-center">
                        <h1>
                            Zoom Assistant
                        </h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="d-flex">
                            <div className="InputElements">
                                <br></br><h3>Invite Link</h3>
                                <Invite updatedTaskList={this.updateTaskList} handleCompletedTasks={this.handleCompletedTasks} />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="d-flex">
                            <div>
                            <div className="InputElements">
                                <h3>To Do</h3>
                                <AddTask updatedTaskList={this.updateTaskList} handleCompletedTasks={this.handleCompletedTasks} />
                            </div>
                            </div>
                            <div className="taskListElements">
                                <ListItems tasks={this.state.taskList} handleTaskClick={this.handleTaskClick} />
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="d-flex">
                            <div className="InputElements">
                                <h3>Live Transcript</h3>
                                <Transcript updatedTaskList={this.updateTaskList} handleCompletedTasks={this.handleCompletedTasks} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

        return (
            <div>
                {jumbotronInstance}
            </div>
        );
    }
}

export default ToDoItemList;