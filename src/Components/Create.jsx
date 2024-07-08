import React, { useState } from 'react';
import { API_URL } from '../Constants/URL';
import { Form, Button, Checkbox } from 'semantic-ui-react';
import './Create.css';
import axios from 'axios';

const Create = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checked, setChecked] = useState(false);

    const postData = async () => {

           // Check if any required field is empty
        if (!firstName || !lastName || !checked) {
            alert('Please fill out all fields and agree to the terms');
            return;
        }
        
        try {
            await axios.post(API_URL, {
                firstName,
                lastName,
                checked,
            });

            // Reset input fields after successful submission
            setFirstName('');
            setLastName('');
            setChecked(false);

            // Optionally, you can show a success message or handle other logic after successful submission
            console.log('Data submitted successfully!');
        } catch (error) {
            // Handle error, show an error message
            console.error('Error submitting data:', error);
        }
    };

    return (
        <Form className='form'>
            <Form.Field>
                <label>First Name: </label>
                <input
                    type="text"
                    placeholder='Enter First Name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </Form.Field>

            <Form.Field>
                <label>Last Name: </label>
                <input
                    type="text"
                    placeholder='Enter Last Name'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </Form.Field>

            <Form.Field>
                <Checkbox
                    label='Agree to the terms and conditions'
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                />
            </Form.Field>

            <Button onClick={postData}>Submit</Button>
        </Form>
    );
};

export default Create;

