import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../components/context/authContext';
import {Link} from 'react-router-dom';

const Login = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const { signUp, currentUser } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const handleEvent = async (e) => {
		e.preventDefault();

		try {
			setError('');
			setLoading(true);
			await signUp(emailRef.current.value, passwordRef.current.value);
		} catch (err) {
			setError('Failed to signup');
			setLoading(false);
		}
	};
	return (
		<>
			<Card>
				<Card.Body>
					<h2 className='text-center mb-4'>Sign Up</h2>
					{error && <Alert variant='danger'>{error}</Alert>}
					<Form onSubmit={handleEvent}>
						<Form.Group>
							<Form.Label>Email</Form.Label>
							<Form.Control type='email' ref={emailRef} required></Form.Control>
						</Form.Group>
						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type='password'
								ref={passwordRef}
								required
							></Form.Control>
						</Form.Group>
						<Button
							disabled={loading}
							type='submit'
							className='w-100 text-center '
						>
							Log In
						</Button>
					</Form>
				</Card.Body>
			</Card>
			<div className='w-100 text-center mt-2'>
				Need an account ? <Link to='/signup'>Sign Up</Link>
			</div>
		</>
	);
};

export default Login;
