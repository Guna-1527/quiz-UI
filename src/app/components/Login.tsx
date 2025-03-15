'use client';

import { motion } from 'framer-motion';
import Icon from "../components/Icon"
import { useState, ChangeEvent, FormEvent } from 'react';
import { FaLock, FaKey, FaUser, FaEnvelope, FaLockOpen } from 'react-icons/fa';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Logging in:', formData);
  };

  return (
    <div className="flex w-screen h-screen">
      {/* Left Side - Login Form */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-1 justify-center items-center p-10"
      >
        <div className="max-w-md p-10 bg-white shadow-lg rounded-lg">
          <p className="text-gray-500">Start for Free.</p>
          <h1 className="font-bold text-3xl mb-6">Welcome Back, again!</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="flex flex-col relative">
              <span className="text-sm text-gray-600">Username</span>
              <div className="flex items-center border p-2 rounded mt-1">
                <FaUser className="text-gray-500 mr-2" />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="flex-1 outline-none"
                  placeholder="Enter username"
                />
              </div>
            </label>
            <label className="flex flex-col relative">
              <span className="text-sm text-gray-600">Email</span>
              <div className="flex items-center border p-2 rounded mt-1">
                <FaEnvelope className="text-gray-500 mr-2" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="flex-1 outline-none"
                  placeholder="Enter email"
                />
              </div>
            </label>
            <label className="flex flex-col relative">
              <span className="text-sm text-gray-600">Password</span>
              <div className="flex items-center border p-2 rounded mt-1">
                <FaLockOpen className="text-gray-500 mr-2" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="flex-1 outline-none"
                  placeholder="Enter password"
                />
              </div>
            </label>
            <button type="submit" className="btn btn-neutral mt-4">Login</button>
          </form>
        </div>
      </motion.div>
      
      {/* Right Side - Lock & Key Animation */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-1 justify-center items-center "
      >
        <Icon />
      </motion.div>
    </div>
  );
};

export default Login;
