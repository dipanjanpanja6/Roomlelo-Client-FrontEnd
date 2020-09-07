import React, { useState, useEffect } from 'react';
import loadable from '@loadable/component'
import ReactGA from 'react-ga';

import Appbar from './components/AppBar';
// import Home from './views/home'; 
// import Login from './views/login'; 
// import SignUp from './views/signup';
// import RoomsPageList from "./views/Rooms_Page";
// import RoomPage from "./views/RoomPage";

// import E4 from './views/E4'; 
import { BrowserRouter as Router, Route, Switch, Redirect, matchPath, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";



import { connect } from 'react-redux';

import PropType from 'prop-types'
// import aboutUs from './views/aboutUs';
// import Account_SignUp from '../src/views/account_signup'
import Loading from './components/loading';
import DashboardMain from './views/Dashbord/main';
import { Fab } from '@material-ui/core';

const Home = loadable(() => import('./views/home'))
const RoomsPageList = loadable(() => import('./views/Rooms_Page'))
const RoomPage = loadable(() => import('./views/RoomPage'))
const SignUp = loadable(() => import('./views/signup'))
const aboutUs = loadable(() => import('./views/aboutUs'))

ReactGA.initialize('G-LE03NVM6JE');

const App = (props) => {

	useEffect(() => {
		// props.checkUser() 
	}, [])


	const out = () => {
		// console.log("auth");
		// props.logout();
	}
	
	return (
		<div >
			<Router>
				<Appbar auth={props.auth} out={out} />
				<Switch>



					{/* 			 
					<Route exact path="/qbook"   render={() =>(props.auth===null ?<Loading/>:props.auth===true?<QBook/>: <Redirect to='/login' />)} />
					<Route path="/practice" render={() =>(props.auth===null ?<Loading/>:props.auth===true?<Practice/>: <Redirect to='/login' />)} />
					<Route path="/practiceset" render={() =>(props.auth===null ?<Loading/>:props.auth===true?<PracticeSet/>: <Redirect to='/login' />)} />
				*/}

					<Route exact path="/" component={Home} />

					<Route exact path="/dashboard"
						render={() => (props.auth === null ? <Loading /> : props.auth === true ? <DashboardMain /> : <Redirect to='/login' />)} />
					{/* <Route exact path="/login" component={Login} /> */}

					<Route exact path="/joinus" component={SignUp} />
					<Route exact path='/rooms/:id' component={RoomPage} />
					<Route exact path='/rooms' component={RoomsPageList} />


					<Route exact path="/about" component={aboutUs} />
					{/* <Route exact path="/account/signup" component={Account_SignUp}/> */}

					<Route exact render={() => <Redirect to='/rooms' />} />


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
