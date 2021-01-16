import React, { useState } from 'react'

//
// This is a unused component I added just to run a successful test
// with jest and react testing library. I will remove in future
// The source can be found at the link below:
// https://testing-library.com/docs/react-testing-library/migrate-from-enzyme
//

const Welcome = (props) => {
    const [values, setValues] = useState({
      firstName: props.firstName,
      lastName: props.lastName,
    })
  
    const handleChange = (event) => {
      setValues({ ...values, [event.target.name]: event.target.value })
    }
  
    return (
      <div>
        <h1>
          Welcome, {values.firstName} {values.lastName}
        </h1>
  
        <form name="userName">
          <label>
            First Name
            <input
              value={values.firstName}
              name="firstName"
              onChange={handleChange}
            />
          </label>
  
          <label>
            Last Name
            <input
              value={values.lastName}
              name="lastName"
              onChange={handleChange}
            />
          </label>
        </form>
      </div>
    )
  }
  
  export default Welcome