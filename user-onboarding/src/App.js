import './App.css';
import React, { useState } from 'react';
import schema from './Validation/formSchema';
import * as yup from 'yup';
import axios from 'axios';

import logo from './logo.svg';

import Form from './Components/Form';


const initialFormErrors = {
  username: '',
  password: '',
  email: '',
  tos: '',
}

const initialFormValues = {
  username: '',
  password: '',
  email: '',
  tos: false,
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState([]);

  const ChangerSubmit = () => {
    axios.post('https://reqres.in/api/users', formValues)
    .then(res => {
      // console.log(res)
      setUsers([res.data, ...users ])
    })
    .catch(err => console.error(err));
   
  }

  const validate = (name, value) =>{
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors ({...formErrors, [name]: '' }))
      .catch(err => setFormErrors ({ ...formErrors, [name]: err.errors[0] }))
  }
  
  const Changer = (name,value) => {
    validate(name, value);
   setFormValues({...formValues, [name]: value}) 
  }


  return (
    <div className="App">
     <Form values={formValues} 
     change={Changer} 
     errors={formErrors} 
     submit={ChangerSubmit}
     
     />
     {users.map(user => (
      <div key={user.id}>
        <p>{user.createAt}</p>
        <p>{user.email}</p>
      </div>
     ))}
    </div>
  );
}

export default App;
