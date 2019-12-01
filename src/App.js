import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

import Home from "./components/Home";
import Tasks from "./components/Tasks";
import Task from "./components/Task";
import TaskForm from "./components/Task/TaskForm";

function App() {
  return (
    <Router>
        <div className="container mx-auto">
            <div className="flex flex-wrap">
                <div className="w-full">
                    <ul className="flex mt-5">
                        <li key="main" className="mr-6">
                            TODO
                        </li>
                        <li key="home" className="mr-6">
                            <Link  className="text-blue-500 hover:text-blue-800" to="/">Home</Link>
                        </li>
                        <li key="tasks" className="mr-6">
                            <Link  className="text-blue-500 hover:text-blue-800" to="/tasks">Tasks</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto mt-10 mb-10">
                <div className="content">
                    <Route path="/" exact component={Home}/>
                    <Route path="/tasks" exact component={Tasks}/>
                    <Route path="/task/create" component={TaskForm}/>
                    <Switch>
                        <Route path="/tasks/:id/edit" component={TaskForm} />
                        <Route path="/tasks/:id" component={Task} />
                    </Switch>
                </div>
            </div>
            <p className="text-center">2019 - ToDo</p>
        </div>
    </Router>
  );
}

export default App;
