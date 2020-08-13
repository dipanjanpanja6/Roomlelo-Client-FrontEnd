import React, { useState, useEffect } from 'react';

import Appbar from './components/AppBar';

import Home from './views/home'; 
import Login from './views/login'; 
import SignUp from './views/signup';
import RoomsPageList from "./views/Rooms_Page";
import RoomPage from "./views/RoomPage";

import E4 from './views/E4'; 
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";



import { connect } from 'react-redux';

import PropType from 'prop-types' 
import aboutUs from './views/aboutUs';
import Account_SignUp from '../src/views/account_signup'



const App = (props) => { 

	useEffect(() => {
		//props.checkUser() 
	}, [])


	const out = () => {
		console.log("auth");
		props.logout();
	}


	return (
		<div style={{

			overflow: 'hidden'}}>
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

					<Route exact path="/joinus" component={SignUp} />
					<Route exact path='/rooms/:id' component={RoomPage}/>
					<Route exact path='/rooms' component={RoomsPageList}/>

 
					<Route exact path="/about" component={aboutUs} />
					<Route exact path="/account/signup" component={Account_SignUp}/>

					<Route exact component={E4} />


				</Switch>
			</Router>
			<ToastContainer />
		</div >

	);
}
App.prototype = {
	auth: PropType.object.isRequired,

}
const mapToProp = {
	
}
const mapToState = (state) => ({
	auth: state.user.auth, 
})
export default connect(mapToState, mapToProp)(App);
