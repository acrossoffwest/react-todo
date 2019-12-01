import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class TaskForm extends React.Component {
  render() {
    let {task} = this.props
	return (<form action="">
        <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                   htmlFor="title">
                Title
            </label>
            <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="title" type="text" value={task.title} placeholder="TODO: something" />
        </div>
        <div className="w-full px-3 mb-6  mb-5">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                   htmlFor="content">
                Content
            </label>
            <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="content" value={task.content} type="text" placeholder="TODO: something" />
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
            <a href="#" className="rounded-l bg-green-500 mt-5 p-1 px-5 text-white hover:bg-green-400">Save</a>
            <a href="#" onClick={this.props.history.goBack} className="rounded-r bg-gray-500 mt-5 p-1 px-5 text-white hover:bg-gray-400">Cancel</a>
        </div>
    </form>);
  }
}

const TaskPropTypes = {
	// always use prop types!
};

TaskForm.propTypes = TaskPropTypes;

let mapStateToProps = (state, ownProps) => {
    console.log(ownProps.match.params)
    if (ownProps.match.params.id) {
        return {
            task: state.tasks[parseInt(ownProps.match.params.id)]
        }
    }
    return {}
}

export default connect(mapStateToProps)(TaskForm);
