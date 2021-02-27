import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../components/context/authContext';
import { Link, useHistory } from 'react-router-dom';

const UpdateProfile = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const confrimPasswordRef = useRef();
	const { currentUser, updateEmail, updatePassword } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	const handleEvent =  (e) => {
		e.preventDefault();

		if (passwordRef.current.value !== confrimPasswordRef.current.value) {
			return setError('Passwords do not match');
		}

		let promises = [];
        setLoading(true);
		setError('');
		

		if (emailRef.current.value !== currentUser.email) {
			promises.push(updateEmail(emailRef.current.value));
		}
		if (passwordRef.current.value && confrimPasswordRef) {
			promises.push(updatePassword(passwordRef.current.value));
		}

		Promise.all(promises)
			.then(() => {
				history.push('/');
			})
			.catch(() => {
				setError('Failed to update account');
			})
			.finally(() => {
				setLoading(false);
			});
	}
	return (
		<>
			<Card>
				<Card.Body>
					<h2 className='text-center mb-4'>Update Profile</h2>
					{error && <Alert variant='danger'>{error}</Alert>}
					<Form onSubmit={handleEvent}>
						<Form.Group>
							<Form.Label>Email</Form.Label>
							<Form.Control
								type='email'
								ref={emailRef}
								required
								defaultValue={currentUser.mail}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type='password'
								ref={passwordRef}
								placeholder='Leave blank to be same'
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control
								type='password'
								ref={confrimPasswordRef}
								placeholder='Leave blank to be same'
							/>{' '}
						</Form.Group>
						<Button
							disabled={loading}
							type='submit'
							className='w-100 text-center '
						>
							Update Profile
						</Button>
					</Form>
				</Card.Body>
			</Card>
			<div className='w-100 text-center mt-2'>
				<Link to='/'>Cancel</Link>
			</div>
		</>
	);
};

export default UpdateProfile;
