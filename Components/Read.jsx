import React, { useEffect, useState } from 'react';
import { API_URL } from '../Constants/URL';
import './Read.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Read = () => {
  const [apiData, setApiData] = useState([]);

  const navigate = useNavigate(); /*to navigate to update page*/

  const editUser = ({id, firstName, lastName, checked}) => {   /*We won't use async because going to do by localstorage*/

        localStorage.setItem('id', id)
        localStorage.setItem('firstName', firstName)
        localStorage.setItem('lastName', lastName)
        localStorage.setItem('checked', checked)

    navigate('/update') /*to navigate to update page*/
  }

  const deleteAPI = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`); // Ensure the correct URL format
      callGetAPI(); // Refresh the data after deletion
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const callGetAPI = async () => {
    try {
      const res = await axios.get(API_URL);
      setApiData(res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    callGetAPI();
  }, []);

  return (
    <div>
      <h2>Read Operation</h2>

      <table className='table-main-container'>
        <thead className='table-head'>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Status</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((data) => (
            <tr key={data.id} className='table-body'>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.checked ? 'Yes' : 'No'}</td>
              <td>
                <button onClick={() => deleteAPI(data.id)}>Delete</button>
              </td>
              <td>
                <button onClick={() => editUser(data)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Read;
