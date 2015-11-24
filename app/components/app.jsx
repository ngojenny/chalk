import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, Navigation, History } from 'react-router';
import Login from './login/index.jsx';
import Dashboard from './dashboard/index.jsx';
import Classroom from './classroom/index.jsx';
import Lesson from './lesson/index.jsx';
import Exercises from './exercises/index.jsx';
import Topics from './topics/index.jsx';
import LessonTopics from './lesson-topic/index.jsx';
import Footer from './footer/index.jsx';
import Media from './media/index.jsx';
import Instructors from './instructors/index.jsx';
import Headline from './headline/index.jsx';
import EditClassroom from './edit-classroom/index.jsx';
import ManageClassrooms from './manage-classrooms/index.jsx';
import EditLesson from './edit-lesson/index.jsx';
import EditTopics from './topic-edit/index.jsx';
import CourseTemplates from './course-templates/index.jsx';

let createBrowserHistory = require('history/lib/createBrowserHistory');
let ReactCSSTransitionGroup = require('react-addons-css-transition-group');
let App = React.createClass({
	displayName: 'App',
	componentDidMount(){
		let data = require('./sample-data.js');
		this.setState({
			user: data.user
		});
	},
	getInitialState(){
		return{
			user: {},
			announcement: {}
		}
	},
	render() {
		var header; 
		if (location.pathname == '/'){
			header = null;
		} else{
			header = <Headline user={this.state.user}/>;
		}
		return (
			<div className="wrapper">
				{header}
				<section>
					{this.props.children || <Login />}
				</section>
				<Footer />
			</div>
		);
	}
});


ReactDom.render(
	(<Router history={createBrowserHistory()}>
			<Route path='/' component={App}>
			<Route path='/dashboard' component={Dashboard} />
			<Route path='/classroom' component={Classroom} />
			<Route path='/lesson' component={Lesson} />
			<Route path='/topics' component={Topics} />
			<Route path='/exercises' component={Exercises} />
			<Route path='/instructors' component={Instructors} />
			<Route path='/media' component={Media} />
			<Route path='/edit-classroom' component={EditClassroom} />
			<Route path='/manage-classrooms' component={ManageClassrooms} />
			<Route path='/edit-lesson' component={EditLesson} />
			<Route path='/edit-topic' component={EditTopics} />
			<Route path='/course-templates' component={CourseTemplates} />
		</Route>
	</Router>)
	, document.getElementById('app'));