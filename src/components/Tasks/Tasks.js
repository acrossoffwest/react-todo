import React from 'react';
import {Link} from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styles from './Tasks.scss';

class Tasks extends React.Component {
	render () {
		return (
			<div className='Tasks'>
				<h1 className="text-4xl">Tasks list</h1>
				<div>
					<Link to="/task/create">Add</Link>
				</div>
				{this.tasks()}
			</div>
		);
	}

	tasks () {
		let tasks = [
			{header: 'Cut'},
			{header: 'Wake up'},
			{header: 'Sleep'},
			{header: 'Cheburek'},
			{header: 'Training'},
			{header: 'Walking'},
		]
		let i = 0
		return tasks.map(r => (
			<div key={i}>
				<div className="underline text-blue-500 hover:text-blue-800">
					<Link to={`/tasks/${++i}`}>{r.header}</Link>
					<br/>
					<Link className="text-green-500">Open</Link> <Link className="text-yellow-500">Edit</Link> <Link className="text-red-500">Delete</Link></div>
			</div>
		))
	}
};

const TasksPropTypes = {
	// always use prop types!
};

Tasks.propTypes = TasksPropTypes;

export default Tasks;
