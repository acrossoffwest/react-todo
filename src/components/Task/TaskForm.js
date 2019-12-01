import React from 'react';
// import PropTypes from 'prop-types';

class TaskForm extends React.Component {
  render() {
	return (<form action="">
        <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                   htmlFor="title">
                Title
            </label>
            <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="title" type="text" placeholder="TODO: something" />
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                   htmlFor="content">
                Content
            </label>
            <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="content" type="text" placeholder="TODO: something" />
        </div>
    </form>);
  }
}

const TaskPropTypes = {
	// always use prop types!
};

TaskForm.propTypes = TaskPropTypes;

export default TaskForm;
