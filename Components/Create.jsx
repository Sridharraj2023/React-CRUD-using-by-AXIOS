import React, { useState } from 'react'
import {API_URL} from '../Constants/URL'
import{Form, Button, Checkbox} from 'semantic-ui-react'
import './Create.css'
import axios from 'axios'

const Create = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checked, setChecked] = useState(false);

    let postData = async () => {

        await axios.post(API_URL, {

            firstName,
            lastName,
            checked,
        }
           
    ); 

    setFirstName("")
    setLastName("")
    setChecked(false)

        // console.log(firstName);
        // console.log(lastName);
        // console.log(checked);

    }




  return (
    <Form className='form'>
        <Form.Field>
            <label>First Name: </label>
            <input type="text" placeholder='Enter First Name' value={firstName} onChange={e => setFirstName(e.target.value)} />
        </Form.Field> <br/>

        <Form.Field>
            <label>Last Name: </label>
            <input type="text" placeholder='Enter Last Name' value={lastName} onChange={e => setLastName(e.target.value)} />
        </Form.Field> <br/>

        <Form.Field>
            <Checkbox label='Agree the terms and conditions' checked={checked} onChange={() => setChecked(!checked) } />
        </Form.Field> <br/>

        <Button onClick={postData}>Sumbit</Button>

    </Form>
  )
}

export default Create
