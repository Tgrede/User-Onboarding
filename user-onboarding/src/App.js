import Form from './Form'
import React, { useState, useEffect } from 'react'
import User from './User'
import axios from 'axios'
import schema from './formSchema'
import * as yup from 'yup'

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

const initialFormErrors = {
  first_name: '',
  last_name: '',
  email:'',
  password: '',
  tos:''
}
const initialDisabled = true

function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [disabled, setDisabled] = useState(initialDisabled)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

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
    yup
    .reach(schema, name)
    .validate(value)
    .then(() => {
      setFormErrors({
        ...formErrors,
         [name]: ''})
    })
    .catch((err) => {
      setFormErrors({...formErrors, [name]:err.errors[0]})
    })

    setFormValues({
      ...formValues, [name]: value
    })
  }

  useEffect(() => {
    getUsers();
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid)
    })
  }, [formValues])
  return (
    <div>
      test
      <Form 
        submit={onSubmit}
        change={onChange}
        formValues={formValues}
        disabled={disabled}
        errors={formErrors}
      />
      {users.map(user => {
        return <User details={user} />
      })}
    </div>
  );
}

export default App;
