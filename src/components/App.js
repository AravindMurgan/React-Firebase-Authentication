import React from 'react';
import SignUp from './signUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import AuthState from '../components/context/authContext';
import Login from './login';
import Dashboard from './dashboard';
import PrivateRoute from './privateRoute';
import ForgotPassword from './forgotPassword';
import UpdateProfile from './updateProfile';
function App() {
	return (
		<>
			<AuthState>
				<Container
					className='d-flex align-items-center justify-content-center'
					style={{ minHeight: '100vh' }}
				>
					<div className='w-100' style={{ maxWidth: '400px' }}>
						<Router>
							<Switch>
								<PrivateRoute exact path='/' component={Dashboard} />
								<PrivateRoute
									path='/update-profile'
									component={UpdateProfile}
								/>
								<Route path='/signup' component={SignUp} />
								<Route path='/login' component={Login} />
								<Route path='/forgotpassword' component={ForgotPassword} />
							</Switch>
						</Router>
					</div>
				</Container>
			</AuthState>
		</>
	);
}

export default App;
