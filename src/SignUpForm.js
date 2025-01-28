import React, { useState } from 'react';

function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', { name, email, mobileNumber });
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
    </>
  );
}

export default SignUpForm;
