import React from 'react';
import {Link} from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styles from './Tasks.scss';

class Tasks extends React.Component {
	render () {
		return (
			<div className='Tasks'>
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
				<div className="underline text-blue-500 hover:text-blue-800"><Link to={`/tasks/${++i}`}>{r.header}</Link></div>
			</div>
		))
	}
};

const TasksPropTypes = {
	// always use prop types!
};

Tasks.propTypes = TasksPropTypes;

export default Tasks;
