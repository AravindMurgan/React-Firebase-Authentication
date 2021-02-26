import React from 'react';
import SignUp from './signUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import AuthState from '../components/context/authContext';
function App() {
	return (
		<>
			<AuthState>
				<Container
					className='d-flex align-items-center justify-content-center'
					style={{ minHeight: '100vh' }}
				>
					<div className='w-100' style={{ maxWidth: '400px' }}>
						<SignUp />
					</div>
				</Container>
			</AuthState>
		</>
	);
}

export default App;
