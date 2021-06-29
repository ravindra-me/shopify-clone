import React from 'react';
import { Link } from 'react-router-dom';
function Signup() {
  return (
    <main class="signup">
      <form>
        <h2>CREATE ACCOUNT</h2>
        <input type="text" name="firstName" placeholder="First Name" />
        <input type="text" name="lastName" placeholder="Last Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button>CREATE</button>
        <Link to="/login" className="mt-4 text-blue-500 inline-block">
          Already have account? login
        </Link>
      </form>
    </main>
  );
}

export default Signup;
