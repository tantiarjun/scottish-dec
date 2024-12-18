import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {

      const response = await axios.post(`${import.meta.env.VITE_REACT_API_URL}/auth/login`, {
        username: email,
        password: password,
      });

      // Save the token to local storage
      localStorage.setItem('token', response.data.token);

      // Redirect to the dashboard
      navigate('/logout');
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center text-gray-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center blur-sm" style={{ backgroundImage: 'url("Images/admin/login-bg.jpg")' }}></div>
      <div className="relative bg-white bg-opacity-10 backdrop-blur-md px-4 sm:px-16 py-8 rounded-3xl shadow-2xl w-full max-w-lg m-2">
        <h2 className="text-2xl font-base mb-6 text-center">Login to Admin account</h2>
        <form onSubmit={handleLogin}>
          {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="email">
              Enter email id
            </label>
            <input
              type="email"
              id="email"
              placeholder="admin@scottishhindufoundation.com"
              className="bg-transparent border-b-2 border-gray-400 w-full py-2 px-3 focus:outline-none focus:shadow-none"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm mb-2" htmlFor="password">
              Enter Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className="bg-transparent border-b-2 border-gray-400 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link to='/forget'><button className='text-shfOrange mt-2 text-sm'>Forget Password</button></Link>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-shfOrange hover:bg-orange-500 active:bg-orange-400 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              LOGIN
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
