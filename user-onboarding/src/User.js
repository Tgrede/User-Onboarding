import React from 'react'

export default function User(props) {
     const {details} = props
     return (
          <div>
              <h2>{details.first_name} {details.last_name}</h2>
              <p>E-Mail: {details.email}</p>
              <p>PassWord:{details.password}</p>
              <p>ToS signed? {details.tos ? 'Yes' : 'No'}</p>
          </div>
     )
}
