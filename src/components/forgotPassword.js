import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../components/context/authContext';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
	const emailRef = useRef();
	const { resetpassword } = useAuth();
	const [error, setError] = useState('');
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);

	const handleEvent = async (e) => {
		e.preventDefault();

		try {
			setMessage('');
			setError('');
			setLoading(true);
			await resetpassword(emailRef.current.value);
			setMessage('Check your inbox for further instructions');
		} catch (err) {
			setError('Failed to reset password');
			setLoading(false);
		}
	};
	return (
		<>
			<Card>
				<Card.Body>
					<h2 className='text-center mb-4'>Password Reset</h2>
					{error && <Alert variant='danger'>{error}</Alert>}
                    {message && <Alert variant='success'>{message}</Alert>}
					<Form onSubmit={handleEvent}>
						<Form.Group>
							<Form.Label>Email</Form.Label>
							<Form.Control type='email' ref={emailRef} required />
						</Form.Group>
						<Button
							disabled={loading}
							type='submit'
							className='w-100 text-center '
						>
							Reset Password
						</Button>
					</Form>
				</Card.Body>
			</Card>
			<div className='w-100 text-center mt-2'>
				Remember your password ? <Link to='/login'>Log In</Link>
			</div>
		</>
	);
};

export default ForgotPassword;
