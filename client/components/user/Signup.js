import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { newUser } from '../../action/user';

function Signup(props) {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    errors: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
    },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const errors = { ...state.errors };
    switch (name) {
      case 'firstName':
        errors.firstName =
          value.length >= 3 ? '' : 'it must be include 3 latter';
        break;
      case 'lastName':
        errors.lastName =
          value.length >= 3 ? '' : 'it must be include 3 latter';
        break;
      case 'email':
        errors.email =
          value.indexOf('@') === -1 ? 'email must be include @ ' : '';
        break;
      case 'password':
        let passwordError;
        let vr = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/;
        if (value.length < 6) {
          passwordError = 'password must b included 6 charecters';
        }
        if (!vr.test(value)) {
          passwordError =
            'password must be include 8 at least one letter, one number and one special character';
        }
        errors.password = passwordError;
        break;
      case 'phone':
        if (/^\d{10}$/.test(value)) {
          errors.phone = '';
        } else {
          errors.phone = 'Invalid number; must be ten digits';
        }
        break;
      default:
        break;
    }
    setState({ ...state, [name]: value, errors });
  };

  const { firstName, lastName, email, password, phone, errors } = state;

  return (
    <form className="flex-40 shadow-lg shadow border border-indigo-600 bg-gray-100 rounded-lg ">
      <h2>CREATE ACCOUNT</h2>
      <div className="mb-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="bg-white"
          value={firstName}
          onChange={handleChange}
        />
        <span className="text-red-500">{errors.firstName}</span>
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={handleChange}
        />
        <span className="text-red-500">{errors.lastName}</span>
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <span className="text-red-500">{errors.email}</span>
      </div>
      <div className="mb-4">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
        <span className="text-red-500">{errors.password}</span>
      </div>
      <div className="mb-4">
        <input
          type="number"
          name="phone"
          placeholder="contact number"
          value={phone}
          onChange={handleChange}
        />
        <span className="text-red-500">{errors.phone}</span>
      </div>

      <button
        className="hover:bg-black rounded"
        onClick={(e) => {
          e.preventDefault();
          props.dispatch(
            newUser({
              firstName: state.firstName,
              lastName: state.lastName,
              email: state.email,
              password: state.password,
              phone: state.phone,
            })
          );
        }}
      >
        CREATE
      </button>
      <Link to="/login" className="mt-4 text-blue-500 inline-block">
        Already have account? login
      </Link>
    </form>
  );
}

const mapsStateToProps = (state) => state;

export default connect(mapsStateToProps)(Signup);
