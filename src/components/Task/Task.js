import React from 'react';
// import PropTypes from 'prop-types';
// import styles from './Task.scss';

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
class Task extends React.Component {
  render() {
    let task = {
        title: "Task title",
        content: "Some content of task",
        status: "process"
    };
    let {id} = this.props.match.params
	return <div>
        <h1 className="text-4xl">{task.title}</h1>
        <p className="mt-3">{task.content}</p>
        <p className="mt-5"><span className="text-blue-600">Status:</span> {task.content}</p>
        <button className="rounded bg-green-500 mt-5 p-1 px-5 text-white hover:bg-green-400" type="button">Done</button>
        <button className="ml-5 rounded bg-blue-500 mt-5 p-1 px-5 text-white hover:bg-blue-400" type="button">Edit</button>
        <button className="ml-5 rounded bg-red-500 mt-5 p-1 px-5 text-white hover:bg-red-400" type="button">Remove</button>
    </div>;
  }
}

const TaskPropTypes = {
	// always use prop types!
};

Task.propTypes = TaskPropTypes;

export default Task;
