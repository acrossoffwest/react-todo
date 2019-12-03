import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import styles from './Tasks.scss';

const TasksList = ({tasks}) => {
	let i = 0
	return tasks.map(r => (
		<div key={i}>
			<div className="underline text-blue-500 hover:text-blue-800 mb-5">
				<Link to={`/tasks/${i}`}>{!r.title ? 'Default task title' : r.title}</Link>
				<Link className="ml-10 bg-blue-500 rounded-l px-2 mt-5 p-1 text-white hover:bg-blue-400" to={`/tasks/${i}/edit`}>Edit</Link>
				<Link className="bg-red-500 mt-5 rounded-r px-2 p-1 text-white hover:bg-red-400" to={`/tasks/${i++}/edit`}>Remove</Link>
			</div>
		</div>
	))
}

const Tasks = ({tasks}) => {
	return (
		<div className='Tasks'>
			<h1 className="text-4xl">Tasks list</h1>
			<div className="mb-5">
				<Link className="bg-green-400 rounded p-2" to="/task/create">Add</Link>
			</div>
			<TasksList tasks={tasks}></TasksList>
		</div>
	);
};

const TasksPropTypes = {
	// always use prop types!
};

Tasks.propTypes = TasksPropTypes;

let mapStateToProps = state => ({tasks: state.tasks});

export default connect(mapStateToProps)(Tasks);
