import React, { useState } from 'react';
import Captcha from '../../components/Captcha';

function SignUp() {
  const CAPTCHA_LENGTH = 6;

  function generateCaptcha() {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < CAPTCHA_LENGTH; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
  }
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [input, setInput] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setCaptcha(generateCaptcha());
    setInput('');
    setIsValid(false);
    setMessage('Signup Successful');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-md mx-auto overflow-hidden bg-white rounded-md shadow-lg sm:max-w-lg'
    >
      <div className='p-6 space-y-6'>
        <div className='mb-4'>
          <label
            htmlFor='username'
            className='block mb-2 font-medium text-gray-700'
          >
            Username
          </label>
          <input
            type='text'
            id='username'
            name='username'
            className='block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            required
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block mb-2 font-medium text-gray-700'
          >
            Email address
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className='block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            required
          />
        </div>
        <div className='mb-8'>
          <label
            htmlFor='password'
            className='block mb-2 font-medium text-gray-700'
          >
            Password
          </label>
          <input
            type='password'
            id='password'
            name='password'
            className='block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            required
          />
        </div>
        <div className='mb-8'>
          <Captcha
            captcha={captcha}
            input={input}
            setInput={setInput}
            isValid={isValid}
            setIsValid={setIsValid}
            CAPTCHA_LENGTH={CAPTCHA_LENGTH}
          />
        </div>
        <div>
          <button
            type='submit'
            className='w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Sign up
          </button>
        </div>
        <p className='text-center text-green-500'>{message}</p>
      </div>
    </form>
  );
}

export default SignUp;
