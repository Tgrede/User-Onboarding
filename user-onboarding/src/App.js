import Form from './Form'
import React, { useState, useEffect } from 'react'

const initialUsers = []
const initialFormValues = {
  name: '',
  email: '',
  password: '',
  tos: false,
}


function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)

  const onSubmit = () => {
    setUsers([formValues, ...users])
  }
  const onChange = (name, value) => {
    setFormValues({
      ...formValues, [name]: value
    })
  }
  return (
    <div>
      test
      <Form 
        submit={onSubmit}
        change={onChange}
        formValues={formValues}
      />
    </div>
  );
}

export default App;
