import React from 'react'

export default function Form(props) {
     const {submit, change, formValues, disabled, errors} = props

     const onChange = (e) => {
          const {name, value, type, checked} = e.target;
          const valueToUse = type === 'checkbox' ? checked : value
          change(name, valueToUse)
     }
     const onSubmit = (e) => {
          e.preventDefault()
          submit()
     }
     return (
          <form onSubmit={onSubmit}>
               <h1>Create user</h1>
               <label>First Name:
                    <input
                         type='text'
                         name='first_name'
                         onChange={onChange}
                         value={formValues.first_name}
                    ></input>
               </label>
               <label>Last Name:
                    <input
                         type='text'
                         name='last_name'
                         onChange={onChange}
                         value={formValues.last_name}
                    ></input>
               </label>
               <label>Email:
                    <input
                         type='text'
                         name='email'
                         onChange={onChange}
                         value={formValues.email}
                    ></input>
               </label>
               <label>Password:
                    <input
                         type='text'
                         name='password'
                         onChange={onChange}
                         value={formValues.password}
                    ></input>
               </label>
               <label>Agree to Terms of Service?
                    <input
                         type='checkbox'
                         name='tos'
                         onChange={onChange}
                         value={formValues.tos}
                    ></input>
               </label>
               <button disabled={disabled}>Submit</button>
               <div>
                    <div>{errors.first_name}</div>
                    <div>{errors.last_name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.tos}</div>
               </div>
          </form>
     )
}
