import React from 'react';
import SignUp from './signUp';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import AuthState from '../components/context/authContext';
import Login from './login';
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
								{/* <Route exact path='/' component={Dashboard} /> */}
								<Route path='/signup' component={SignUp} />
								<Route path='/login' component={Login} />
							</Switch>
						</Router>
					</div>
				</Container>
			</AuthState>
		</>
	);
}

export default App;
