import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class TaskForm extends React.Component {
    componentWillMount(){
        this.setState({
            updatable : false,
            task: this.getTask()
        });
    }
    getTask () {
        let {task} = this.props;
        return task ? task : {};
    }
    add (task) {
        return () => {
            task.status = 'new';
            this.props.add(task);
            this.props.history.push('/tasks');
        }
    }
    update (index, task) {
        return () => {
            this.props.update(index, task);
            this.setState({
                task: task
            })
        }
    }
    saveButton (index, task) {
        if (!index) {
            return <a href="#" onClick={ this.add(this.state.task) } className="rounded-l bg-green-500 mt-5 p-1 px-5 text-white hover:bg-green-400">Create</a>
        }
    }
  render() {
    let task = {};
    let index = this.props.match.params.id
    let handleChange = ({target: {value, id}}) => {
        task[id] = value;
        let state = {
            task: this.state.task
        };
        state.task[`${id}`] = value;
        this.setState(state);
        this.update(index, state.task);
    };

	return (<form action="">
        <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                   htmlFor="title">
                Title
            </label>
            <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="title" type="text" value={this.state.task.title} placeholder="TODO: Fill title" onChange={handleChange}/>
        </div>
        <div className="w-full px-3 mb-6  mb-5">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                   htmlFor="content">
                Content
            </label>
            <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="content" value={this.state.task.content} type="text" placeholder="TODO: Fill some content" onChange={handleChange} />
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
            {this.saveButton(index, task)}
            <a href="#" onClick={this.props.history.goBack} className="rounded-r bg-gray-500 mt-5 p-1 px-5 text-white hover:bg-gray-400">Back</a>
        </div>
    </form>);
  }
}

const TaskPropTypes = {
	// always use prop types!
};

TaskForm.propTypes = TaskPropTypes;

let mapStateToProps = (state, ownProps) => {
    if (ownProps.match.params.id) {
        return {
            task: state.tasks[parseInt(ownProps.match.params.id)]
        }
    }
    return {}
};

const add = (task) => {
    return {
        type: 'ADD_TASK',
        payload: task
    };
};

const update = (index, task) => {
    return {
        type: 'UPDATE_TASK',
        index,
        payload: task
    };
};

let mapDispatchToProps = dispatch => {
  return {
      add: (task) => dispatch(add(task)),
      update: (index, task) => dispatch(update(index, task)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
