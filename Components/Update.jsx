import React, { useEffect, useState } from 'react';
import { API_URL } from '../Constants/URL';
import '../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Checkbox } from 'semantic-ui-react';

const Update = () => {
  const [id, setId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate(); // If using React Router for navigation

  useEffect(() => {
    // Retrieve values from localStorage or props as needed
    setId(localStorage.getItem('id'));
    setFirstName(localStorage.getItem('firstName'));
    setLastName(localStorage.getItem('lastName'));
    setChecked(localStorage.getItem('checked') === 'true'); // Parse boolean from string

    // Optional: If you want to use axios.put on component mount, do it like this:
    const userUpdate = async () => {
      try {
        await axios.put(`${API_URL}/${id}`, {
          firstName,
          lastName,
          checked,
        });
        // Optionally navigate after successful update
        navigate('/'); // Navigate to home or another route
      } catch (error) {
        console.error('Error updating user:', error);
      }
    };

    // Optionally call userUpdate when component mounts or when id changes
    // userUpdate(); // Uncomment this line if you want to update on component mount
  }, []);

  const handleUpdate = async () => {
    try {
      await axios.put(`${API_URL}/${id}`, {
        firstName,
        lastName,
        checked,
      });
      // Optionally navigate after successful update
      navigate('/read'); // Navigate to home or another route
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <Form className='form'>
      <Form.Field>
        <label>First Name: </label>
        <input
          type='text'
          placeholder='Enter First Name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Field>{' '}
      <br />
      <Form.Field>
        <label>Last Name: </label>
        <input
          type='text'
          placeholder='Enter Last Name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Field>{' '}
      <br />
      <Form.Field>
        <Checkbox
          label='Agree the terms and conditions'
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      </Form.Field>{' '}
      <br />
      <Button onClick={handleUpdate}>Update</Button>
    </Form>
  );
};

export default Update;

