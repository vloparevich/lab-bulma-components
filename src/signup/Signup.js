import React from 'react';
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton';

const SignUp = () => {
  return (
    <div>
      <Navbar />
      <FormField label='Name' type='text' placeholder='your name' />
      <FormField label='Email' type='email' placeholder='your email' />
      <CoolButton className='button is-small is-success' buttonLabel='Signup' />
    </div>
  );
};

export default SignUp;
