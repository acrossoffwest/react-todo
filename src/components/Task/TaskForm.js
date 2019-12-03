import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

const addTask = (task, add, history) => {
    return () => {
        task.status = 'new';
        add(task);
        history.push('/tasks');
    }
};

const updateTask = (index, task, update, setTask) => {
    return () => {
        update(index, task);
        setTask(task)
    }
};

const handleChange = (index, task, setTask, {target: {value: inputValue, id: elementID}}) => {
    task[elementID] = inputValue;
    setTask(task);
    updateTask(index, task);
};

const SaveButton = ({index, task, add, history}) => {
    if (!index) {
        return <a href="#" onClick={ addTask(task, add, history) } className="rounded-l bg-green-500 mt-5 p-1 px-5 text-white hover:bg-green-400">Create</a>
    }
    return ''
};

const TaskForm = ({task: initTask = {}, add, update, history, match: {params: { id: index }}}) => {
    const [task, setTask] = useState(initTask);

    const handleChangeWrapper = e => handleChange(index, task, setTask, e);

    return (<form action="">
        <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                   htmlFor="title">
                Title
            </label>
            <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="title" type="text" value={task.title} placeholder="TODO: Fill title" onChange={handleChangeWrapper}/>
        </div>
        <div className="w-full px-3 mb-6  mb-5">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                   htmlFor="content">
                Content
            </label>
            <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="content" value={task.content} type="text" placeholder="TODO: Fill some content" onChange={handleChangeWrapper} />
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
            <SaveButton index={index} task={task} add={add} history={history}></SaveButton>
            <a href="#" onClick={history.goBack} className="rounded-r bg-gray-500 mt-5 p-1 px-5 text-white hover:bg-gray-400">Back</a>
        </div>
    </form>);
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
