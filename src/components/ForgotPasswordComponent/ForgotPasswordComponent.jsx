import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ForgotPasswordComponent = () => {
    const [email, setEmail] = useState('');

    const emailHandler = (event) => {
        setEmail(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(email);
    }

    return (
        <React.Fragment>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group controlId="formEmail">
                    <Form.Label>Enter your Email ID to reset password</Form.Label>
                    <Form.Control
                        type='email'
                        name='email'
                        placeholder='Enter your email'
                        onChange={emailHandler}
                        value={email}
                    />
                </Form.Group>
                <br></br>
                <Button variant="primary" type='submit'>Submit</Button>
            </Form>
        </React.Fragment>
    );
}

export default ForgotPasswordComponent;
