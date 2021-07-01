import React, { useEffect, useState } from 'react';
function Login() {
  const [state, setState] = useState({
    email: '',
    password: '',
    errors: {
      email: '',
      password: '',
    },
  });

  const handleChnage = (event) => {
    const { value, name } = event.target;
    const errors = { ...state.errors };
    switch (name) {
      case 'email':
        errors.email =
          value.indexOf('@') === -1 ? 'Email does not contain @' : '';
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

      default:
        break;
    }
    setState({ ...state, [name]: value, errors });
  };

  const { email, password, errors } = state;
  return (
    <form className="flex-40 self-start shadow-lg shadow border border-indigo-600 bg-gray-100 rounded-lg">
      <h2>LOGIN</h2>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChnage}
        />
        <span className="text-red-500">{errors.email}</span>
      </div>
      <div className="mb-4">
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChnage}
        />
        <span className="text-red-500">{errors.password}</span>
      </div>
      <button className="hover:bg-black rounded">Sign In</button>
      <a href="#">Forget Your Password?</a>
    </form>
  );
}

export default Login;
