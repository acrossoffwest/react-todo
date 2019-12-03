import React from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
// import PropTypes from 'prop-types';
// import styles from './Task.scss';

const Task = ({task, match: {params: id}, history: {goBack}}) => {
    return <div>
        <h1 className="text-4xl">{task.title}</h1>
        <p className="mt-3">{task.content}</p>
        <p className="mt-5 mb-5"><span className="text-blue-600">Status:</span> {task.status}</p>
        <Link className="rounded-l bg-green-500 mt-5 p-1 px-5 text-white hover:bg-green-400" to={`/tasks/${id}/edit`}>Done</Link>
        <Link className="bg-blue-500 mt-5 p-1 px-5 text-white hover:bg-blue-400" to={`/tasks/${id}/edit`}>Edit</Link>
        <Link className="bg-red-500 mt-5 p-1 px-5 text-white hover:bg-red-400" to={`/tasks/${id}/edit`}>Remove</Link>
        <Link onClick={goBack} className="rounded-r bg-gray-500 mt-5 p-1 px-5 border-transparent text-white hover:bg-gray-400">Back</Link>
    </div>;
}

const TaskPropTypes = {
	// always use prop types!
};

Task.propTypes = TaskPropTypes;

let mapStateToProps = (state, ownProps) => ({
    task: state.tasks[ownProps.match.params.id]
});

export default connect(mapStateToProps)(Task);
