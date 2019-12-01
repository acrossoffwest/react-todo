import React from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
// import PropTypes from 'prop-types';
// import styles from './Task.scss';

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
class Task extends React.Component {
  render() {
    let {task} = this.props;
    let {id} = this.props.match.params
	return <div>
        <h1 className="text-4xl">{task.title}</h1>
        <p className="mt-3">{task.content}</p>
        <p className="mt-5 mb-5"><span className="text-blue-600">Status:</span> {task.status}</p>
        <Link className="rounded-l bg-green-500 mt-5 p-1 px-5 text-white hover:bg-green-400" to={`/tasks/${id}/edit`}>Done</Link>
        <Link className="bg-blue-500 mt-5 p-1 px-5 text-white hover:bg-blue-400" to={`/tasks/${id}/edit`}>Edit</Link>
        <Link className="bg-red-500 mt-5 p-1 px-5 text-white hover:bg-red-400" to={`/tasks/${id}/edit`}>Remove</Link>
        <Link to={`/tasks`} className="rounded-r bg-gray-500 mt-5 p-1 px-5 border-transparent text-white hover:bg-gray-400">Cancel</Link>
    </div>;
  }
}

const TaskPropTypes = {
	// always use prop types!
};

Task.propTypes = TaskPropTypes;

let mapStateToProps = (state, ownProps) => ({
    task: state.tasks[ownProps.match.params.id]
});

export default connect(mapStateToProps)(Task);
