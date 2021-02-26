import React,{useRef} from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confrimPasswordRef = useRef();

	return (
		<>
			<Card>
				<Card.Body>
					<Form>
						<h2 className='text-center mb-4'>Sign Up</h2>
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
						<Form.Group>
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control
								type='password'
								ref={confrimPasswordRef}
								required
							></Form.Control>
						</Form.Group>
                        <Button type="submit" className="w-100 text-center " >Sign Up</Button>
					</Form>
				</Card.Body>
			</Card>
			<div className='w-100 text-center mt-2'>
				Already have an account? Log In
			</div>
		</>
	);
};

export default SignUp;
