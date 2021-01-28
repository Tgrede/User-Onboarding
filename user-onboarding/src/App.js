import Form from './Form'
import React, { useState, useEffect } from 'react'
import User from './User'
import axios from 'axios'

const initialUsers = []
const initialFormValues = {
  id: 0,
  first_name: '',
  last_name: '',
  avatar: '',
  email: '',
  password: '',
  tos: false,
}


function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)

  const getUsers = () => {
    axios.get(`https://reqres.in/api/users`)
    .then((res) => {
      setUsers(res.data.data)
    })
    .catch(err => console.log(err))
  }
  const postNewUser = (newUser) => {
    axios.post('https://reqres.in/api/users',newUser)
    .then((res) => {
      console.log(res)
      setUsers([res.data, ...users])
      setFormValues(initialFormValues)
    })
    .catch(err => console.log(err))
  }

  const onSubmit = () => {
    const newUser = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos: formValues.tos
    }
    //setUsers([newUser, ...users])
    postNewUser(newUser)
  }
  const onChange = (name, value) => {
    setFormValues({
      ...formValues, [name]: value
    })
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div>
      test
      <Form 
        submit={onSubmit}
        change={onChange}
        formValues={formValues}
      />
      {users.map(user => {
        return <User details={user} />
      })}
    </div>
  );
}

export default App;
