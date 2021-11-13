import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ToDoItemList from './ToDoItemList';
import './index.css';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));

// const reactContainer = document.getElementById("react-container");

// ReactDOM.render(<div>
//     <ToDoItemList />
//     </div>, reactContainer
// );