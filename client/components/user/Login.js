import React from 'react';
function Login() {
  return (
    <main class="login">
      <form>
        <h2>LOGIN</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign In</button>
        <a href="#">Forget Your Password?</a>
        <Link to="/signup">Create Account</Link>
      </form>
    </main>
  );
}

export default Login;
