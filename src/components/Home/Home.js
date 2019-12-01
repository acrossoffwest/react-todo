import React from 'react';
import { Link } from "react-router-dom"
// import PropTypes from 'prop-types';
// import styles from './Home.scss';

const Home = props => (
	<div>
		<h1 className="text-4xl">Welcome to <span className="text-4xl">ToDo</span> application.</h1>
		<p className="mt-3">Here you can plan your <Link to="/tasks" className="underline">tasks</Link>.</p>
	</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class Home extends React.Component {
//   render() {
//     return <div>This is a component called Home.</div>;
//   }
// }

const HomePropTypes = {
	// always use prop types!
};

Home.propTypes = HomePropTypes;

export default Home;
