import React, { useState, useEffect } from 'react';

import Appbar from './components/AppBar';

import Home from './views/home'; 
import Login from './views/login'; 
import SignUp from './views/signup';
import RoomsPage from "./views/Rooms_Page";

import E4 from './views/E4'; 
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";



import { connect } from 'react-redux';
import { checkUser, logout } from './redux/actions/student'
import PropType from 'prop-types' 



const App = (props) => { 

	useEffect(() => {
		props.checkUser() 
	}, [])


	const out = () => {
		console.log("auth");
		props.logout();
	}


	return (
		<div>
			<Router>
				<Appbar auth={props.auth} out={out} />
				<Switch>
 
				

{/* 			 
					<Route exact path="/qbook"   render={() =>(props.auth===null ?<Loading/>:props.auth===true?<QBook/>: <Redirect to='/login' />)} />
					<Route exact path="/dashboard"  render={() =>(props.auth===null ?<Loading/>:props.auth===true?<Dashboard/>: <Redirect to='/login' />)} />
					<Route path="/practice" render={() =>(props.auth===null ?<Loading/>:props.auth===true?<Practice/>: <Redirect to='/login' />)} />
					<Route path="/practiceset" render={() =>(props.auth===null ?<Loading/>:props.auth===true?<PracticeSet/>: <Redirect to='/login' />)} />
 */}



					<Route exact path="/" component={Home} />
					{/* <Route exact path="/about" component={About} />
					<Route exact path="/courses" component={Courses} /> */}

					<Route exact path="/login" component={Login} />

					<Route exact path="/signup" component={SignUp} />
					<Route exact path='/rooms' component={RoomsPage}/>
				{/*	<Route exact path="/signupOld" component={SignUpOld} />


					<Route exact component={E4} /> */}


				</Switch>
			</Router>
			<ToastContainer />
		</div >

	);
}
App.prototype = {
	auth: PropType.object.isRequired,
	checkUser: PropType.func.isRequired,
	logout: PropType.func.isRequired,
}
const mapToProp = {
	logout, checkUser
}
const mapToState = (state) => ({
	auth: state.admin.auth, 
})
export default connect(mapToState, mapToProp)(App);
