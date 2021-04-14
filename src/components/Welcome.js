import React, { useState } from 'react';
import PropTypes from 'prop-types';

//
// This is a unused component I added just to run a successful test
// with jest and react testing library. I will remove in future
// The source can be found at the link below:
// https://testing-library.com/docs/react-testing-library/migrate-from-enzyme
//

const Welcome = (props) => {
  const [values] = useState({
    firstName: props.firstName,
    lastName: props.lastName,
  });
  return (
    <div>
      <h1>
        Welcome, {values.firstName} {values.lastName}
      </h1>

      <form name="userName">
        <label>
          First Name
          <input value={values.firstName} name="firstName" readOnly={true} />
        </label>

        <label>
          Last Name
          <input value={values.lastName} name="lastName" readOnly={true} />
        </label>
      </form>
    </div>
  );
};

Welcome.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default Welcome;
