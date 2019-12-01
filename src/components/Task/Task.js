import React from 'react';
// import PropTypes from 'prop-types';
// import styles from './Task.scss';

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
class Task extends React.Component {
  render() {
    let {id} = this.props.match.params
	return <div>Task: {id}</div>;
  }
}

const TaskPropTypes = {
	// always use prop types!
};

Task.propTypes = TaskPropTypes;

export default Task;
