import React from 'react';
import SignUp from './signup/Signup';

const App = () => {
  return (
    <div>
      {/* <Navbar />
      <FormField label='Name' type='text' placeholder='e.g Alex Smith' />
      <FormField
        label='Email'
        type='email'
        placeholder='e.g. alexsmith@gmail.com'
      />
      <CoolButton
        isSmall
        isDanger
        className='button is-rounded my-class is-danger is-small'
        buttonLabel='Button 1'
      />
      <CoolButton
        className='button is-small is-success'
        buttonLabel='Button 2'
      />*/}
      <SignUp />
    </div>
  );
};

export default App;
